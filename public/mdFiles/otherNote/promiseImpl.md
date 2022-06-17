# Promise implement

```ts
enum PromiseState {
    PEDING = 'pending',
    FULLFILLED = 'fulfilled',
    REJECTED = 'rejected'
}

interface PromiseLike<T> {
    then<TResult1 = T, TResult2 = never>(
        onFulfilled?: ((value: T | PromiseLike<T>) => TResult1 | PromiseLike<TResult1>) | null | undefined,
        onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined
    ): PromiseLike<TResult1 | TResult2>
}

interface Resolve<T> {
    (value: T | PromiseLike<T>): void
}

interface Reject {
    (reason?: any): void
}

interface Executor<T> {
    (resolve: Resolve<T>, reject: Reject): void
}




export class PromiseImpl<T> {
    state: PromiseState = PromiseState.PEDING
    value!: T | PromiseLike<T>
    reason: any
    onFulfillCallbacks: Array<() => void> = []
    onFailedCallbacks: Array<() => void> = []

    resolve: Resolve<T> = (value: T | PromiseLike<T>): void => {
        try {
            setTimeout(() => {
                if (this.state !== PromiseState.PEDING) return
                this.state = PromiseState.FULLFILLED
                this.value = value
                this.onFulfillCallbacks.forEach(fn => fn())
                this.onFulfillCallbacks = []
            })
        } catch (error) {
            this.reject(error)
        }
    }

    reject: Reject = (reason: any) => {
        try {
            setTimeout(() => {
                if (this.state !== PromiseState.PEDING) return
                this.state = PromiseState.REJECTED
                this.reason = reason
                this.onFailedCallbacks.forEach(fn => fn())
                this.onFailedCallbacks = []
            })
        } catch (error) {
            this.reject(error)
        }
    }

    constructor(executor: Executor<T>) {
        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e)
        }
    }

    // 2.2.1
    then<TResult1 = T, TResult2 = never>(
        onFulfilled?: ((value: T | PromiseLike<T>) => TResult1 | PromiseLike<TResult1>) | null | undefined,
        onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined
    ): PromiseImpl<TResult1 | TResult2> {
        // 2.2.1.1
        onFulfilled = (typeof onFulfilled === 'function' ?
            onFulfilled :
            (val: T | PromiseLike<T>) => { return val }) as any
        // 2.2.1.2
        onRejected = typeof onRejected === 'function' ?
            onRejected :
            (r: any) => { throw r }
        // 2.2.2
        // 2.2.3
        const promise2 = new PromiseImpl<TResult1 | TResult2>((resolve, reject) => {
            switch (this.state) {
                case PromiseState.PEDING:
                    // 2.2.4
                    // 2.2.6
                    // 2.2.2.2
                    this.onFulfillCallbacks.push(() => {
                        try {
                            let x = onFulfilled!(this.value)
                            this.resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    // 2.2.4
                    // 2.2.3.2
                    this.onFailedCallbacks.push(() => {
                        try {
                            let x = onRejected!(this.reason)
                            this.resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    break
                case PromiseState.FULLFILLED:
                    // 2.2.4
                    setTimeout(() => {
                        // 2.2.2.1
                        // 2.2.2.3
                        try {
                            let x = onFulfilled!(this.value)
                            this.resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    break
                case PromiseState.REJECTED:
                    // 2.2.4
                    setTimeout(() => {
                        // 2.2.3.1
                        // 2.2.3.3
                        try {
                            let x = onRejected!(this.reason)
                            this.resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    break
            }
        })
        return promise2
    }

    resolvePromise<T>(
        promise: PromiseImpl<T>,
        x: T | PromiseLike<T>,
        resolve: Resolve<T>,
        reject: Reject
    ) {
        // 2.3.1 
        if (promise === x) {
            reject(new TypeError('TypeError:circular reference'))
        }
        let resolved = false
        // 2.3.3
        if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
            try {
                // 2.3.3.1
                const then = (x as PromiseLike<T>).then
                // 2.3.3.3                
                if (typeof then === 'function') {
                    then.call(
                        x,
                        // 2.3.3.3.1
                        (y) => {
                            // 2.3.3.3.3
                            if (resolved) return
                            resolved = true
                            this.resolvePromise(promise, y, resolve, reject)
                        },
                        // 2.3.3.3.2
                        (r) => {
                            // 2.3.3.3.3
                            if (resolved) return
                            resolved = true
                            reject(r)
                        }
                    )
                } else {
                    // 2.3.3.4 
                    resolve(x)
                }
            } catch (error) {
                // 2.3.3.2
                // 2.3.3.3.4
                // 2.3.3.3.4.1
                if (resolved) return
                resolved = true
                // 2.3.3.3.4.2
                reject(error)
            }
        } else {
            // 2.3.4
            resolve(x)
        }
    }
}


// @ts-ignore
PromiseImpl.defer = PromiseImpl.deferred = function () {
    let deferred: any = {};
    deferred.promise = new PromiseImpl((resolve, reject) => {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });
    return deferred;
};

// @ts-ignore
export = PromiseImpl;
```
