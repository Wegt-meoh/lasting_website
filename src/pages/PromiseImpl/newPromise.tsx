// 本promise实现遵循promises/A+
// 官网：https://promisesaplus.com/

enum PromiseState {
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected'
}

interface thenable<T> {
    then<TResult1 = T, TResult2 = never>(
        onFulfilled?: ((value: T | thenable<T>) => TResult1 | thenable<TResult1>) | null | undefined,
        onRejected?: ((reason: any) => TResult2 | thenable<TResult2>) | null | undefined
    ): thenable<T>
}

export class newPromise<T>{
    state: PromiseState = PromiseState.PENDING
    value!: T | thenable<T>
    reason: any
    onFulfilledCallbacks: Array<() => void> = []
    onRejectedCallbacks: Array<() => void> = []

    constructor(executor: (resolve: (value: T | thenable<T>) => void, reject: (reason: any) => void) => void) {
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }

    resolve = (value: T | thenable<T>): void => {
        try {
            setTimeout(() => {
                if (this.state !== PromiseState.PENDING) return
                this.state = PromiseState.FULFILLED
                this.value = value
                this.onFulfilledCallbacks.forEach(fn => fn())
                this.onFulfilledCallbacks = []
            })
        } catch (error) {
            this.reject(error)
        }
    }

    reject = (reason: any): void => {
        try {
            setTimeout(() => {
                if (this.state !== PromiseState.PENDING) return
                this.state = PromiseState.REJECTED
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn())
                this.onRejectedCallbacks = []
            })
        } catch (error) {
            this.reject(error)
        }
    }

    then = <TResult1 = T, TResult2 = never>(
        onFulfilled?: ((value: T | thenable<T>) => TResult1 | thenable<TResult1>) | null | undefined,
        onRejected?: ((reason: any) => TResult2 | thenable<TResult2>) | null | undefined
    ): newPromise<TResult1 | TResult2> => {
        onFulfilled = (typeof onFulfilled === 'function' ?
            onFulfilled : (val: T | thenable<T>) => val) as any
        onRejected = typeof onRejected === 'function' ?
            onRejected : (r: any) => { throw r }

        const promise1 = new newPromise<TResult1 | TResult2>((resolve, reject) => {
            switch (this.state) {
                case PromiseState.FULFILLED:
                    setTimeout(() => {
                        try {
                            let x = onFulfilled!(this.value)
                            this.resolvePromise(promise1, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    break
                case PromiseState.REJECTED:
                    setTimeout(() => {
                        try {
                            let x = onRejected!(this.reason)
                            this.resolvePromise(promise1, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    break
                case PromiseState.PENDING:
                    this.onFulfilledCallbacks.push(() => {
                        try {
                            let x = onFulfilled!(this.value)
                            this.resolvePromise(promise1, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    this.onRejectedCallbacks.push(() => {
                        try {
                            let x = onRejected!(this.reason)
                            this.resolvePromise(promise1, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    break
            }
        })
        return promise1
    }

    resolvePromise<T>(
        promise: newPromise<T>,
        x: T | thenable<T>,
        resolve: (value: T | thenable<T>) => void,
        reject: (reason: any) => void
    ): void {
        if (x === promise) {// 2.3.1
            reject(new TypeError('TypeError:circular reference'))
        } else if (Object.prototype.toString.call(x) === '[object newPromise]') {
            let resolved = false
            const then=(x as newPromise<T>).then
            then(
                (value) => {
                    if (resolved) return
                    resolved = true
                    resolve(value)
                },
                reason => {
                    if (resolved) return
                    resolved = true
                    reject(reason)
                }
            )
        } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {//2.3.3                        
            let resolved = false
            try {
                const then = (x as thenable<T>).then
                if (typeof then === 'function') {
                    then.call(
                        x,
                        (y) => {
                            if (resolved) return
                            resolved = true
                            this.resolvePromise(promise, y, resolve, reject)
                        },
                        (r) => {
                            if (resolved) return
                            resolved = true
                            reject(r)
                        }
                    )
                } else {
                    if (resolved) return
                    resolved = true
                    resolve(x)
                }
            } catch (error) {
                if (resolved) return
                resolved = true
                reject(error)
            }
        } else {
            resolve(x)
        }
    }
}


// @ts-ignore
newPromise.defer = newPromise.deferred = function () {
    let deferred: any = {};
    deferred.promise = new newPromise((resolve, reject) => {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });
    return deferred;
};

// @ts-ignore
export = newPromise;