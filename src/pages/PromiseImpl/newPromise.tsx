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

function resolvePromise<T>(
    promise: newPromise<T>,
    x: T | thenable<T>,
    resolve: (value: T | thenable<T>) => void,
    reject: (reason: any) => void
): void {
    if (x === promise) {// 2.3.1
        reject(new TypeError('TypeError:circular reference'))
    } else if (x instanceof newPromise) {
        let resolved = false
        const then = (x as thenable<T>).then
        try {
            then.call(
                x,
                value => {
                    if (resolved) return
                    resolved = true
                    resolvePromise(promise, value, resolve, reject)
                },
                reason => {
                    if (resolved) return
                    resolved = true
                    reject(reason)
                }
            )
        } catch (error) {
            if (resolved) return
            resolved = true
            reject(error)
        }
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
                        resolvePromise(promise, y, resolve, reject)
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
                // 下面这个分支处理value是thenable的情况，
                // 貌似直接让value等于这个value也可以过promisesaplus
                if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
                    let resolved = false
                    try {
                        const then = (value as thenable<T>).then
                        if (typeof then === 'function') {
                            then.call(
                                value,
                                y => {
                                    if (resolved) return
                                    resolved = true
                                    this.resolve(y)
                                },
                                r => {
                                    if (resolved) return
                                    resolved = false
                                    this.reject(r)
                                }
                            )
                        } else {
                            this.value = value
                            this.state = PromiseState.FULFILLED
                            this.onFulfilledCallbacks.forEach(fn => fn())
                            this.onFulfilledCallbacks = []
                        }
                    } catch (e) {
                        if (resolved) return
                        resolved = true
                        this.reject(e)
                    }
                } else {
                    this.value = value
                    this.state = PromiseState.FULFILLED
                    this.onFulfilledCallbacks.forEach(fn => fn())
                    this.onFulfilledCallbacks = []
                }
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

    then<TResult1 = T, TResult2 = never>(
        onFulfilled?: ((value: T | thenable<T>) => TResult1 | thenable<TResult1>) | null | undefined,
        onRejected?: ((reason: any) => TResult2 | thenable<TResult2>) | null | undefined
    ): newPromise<TResult1 | TResult2> {
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
                            resolvePromise(promise1, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    break
                case PromiseState.REJECTED:
                    setTimeout(() => {
                        try {
                            let x = onRejected!(this.reason)
                            resolvePromise(promise1, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    break
                case PromiseState.PENDING:
                    this.onFulfilledCallbacks.push(() => {
                        try {
                            let x = onFulfilled!(this.value)
                            resolvePromise(promise1, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    this.onRejectedCallbacks.push(() => {
                        try {
                            let x = onRejected!(this.reason)
                            resolvePromise(promise1, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    break
            }
        })
        return promise1
    }

    catch<TResult = never>(onRejected?: ((reason: any) => TResult | thenable<TResult>) | null | undefined): newPromise<T | TResult> {
        return this.then(null, onRejected)
    }

    static resolve<T>(value: T | thenable<T>): newPromise<T> {
        if (value instanceof newPromise) {
            return value
        } else {
            const promise1 = new newPromise<T>((resolve, reject) => {
                resolvePromise(promise1, value, resolve, reject)
            })
            return promise1
        }
    }

    static reject(reason: any): newPromise<unknown> {
        const promise1 = new newPromise((resolve, reject) => {
            reject(reason)
        })
        return promise1
    }

    // finally(onFinally) === then(onFinally,onFinally)    

    finally(onFinally?: (() => void) | undefined | null): newPromise<T> {
        onFinally = (typeof onFinally === 'function' ?
            onFinally : () => { }) as any

        return this.then(
            value => {
                return newPromise.resolve(onFinally!()).then(() => value) as thenable<T>
            },
            reason => {
                return newPromise.resolve(onFinally!()).then(() => { throw reason }) as thenable<any>
            }
        )
    }

    static all<T extends readonly unknown[] | []>(values: T): newPromise<{ -readonly [P in keyof T]: Awaited<T[P]> }> {
        const promise1 = new newPromise<{ -readonly [P in keyof T]: Awaited<T[P]> }>((resolve, reject) => {
            let count = 0
            let resultArray = []
            values.forEach((item, index) => {
                if (item instanceof newPromise) {
                    // resolvePromise(promise1, item, resolve, reject)
                } else {

                }
            })

        })
        return promise1
    }

    // static race<T extends readonly unknown[]|[]>(values:T):newPromise<>{

    // }
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
// export = newPromise;