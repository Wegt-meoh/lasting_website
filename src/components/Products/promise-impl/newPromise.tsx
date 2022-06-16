// 本promise实现遵循promises/A+
// 官网：https://promisesaplus.com/

enum PromiseState {
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected'
}

function resolvePromise<T>(
    promise: newPromise<T>,
    x: T | PromiseLike<T>,
    resolve: (value: T | PromiseLike<T>) => void,
    reject: (reason: any) => void
): void {
    // console.log('resolvePromise')
    if (x === promise) {// 2.3.1
        // console.log('x===promise')
        reject(new TypeError('TypeError:circular reference'))
    } else if (x instanceof newPromise) {
        // console.log('x instanceof new Promise')
        let resolved = false
        const then = (x as PromiseLike<T>).then
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
        // console.log('x maybe thenable')
        let resolved = false
        try {
            const then = (x as PromiseLike<T>).then
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
        // console.log('x is not a object or function')        
        resolve(x)
    }
}

export class newPromise<T>{
    state: PromiseState = PromiseState.PENDING
    value!: T
    reason: any
    onFulfilledCallbacks: Array<() => void> = []
    onRejectedCallbacks: Array<() => void> = []

    constructor(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) {
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }

    resolve = (value?: T | PromiseLike<T>): void => {
        try {
            setTimeout(() => {
                // console.log('resolve')
                if (this.state !== PromiseState.PENDING) return
                // 下面这个分支处理value是thenable的情况，
                // 貌似直接让value等于这个value也可以过promisesaplus
                if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
                    // console.log('value maybe thenable')
                    let resolved = false
                    try {
                        const then = (value as PromiseLike<T>).then
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
                            this.value = value as T
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
                    // console.log('value not be thenable')
                    this.value = value!
                    this.state = PromiseState.FULFILLED
                    this.onFulfilledCallbacks.forEach(fn => fn())
                    this.onFulfilledCallbacks = []
                }
            })
        } catch (error) {
            this.reject(error)
        }
    }

    reject = (reason?: any): void => {
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
        onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null | undefined,
        onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined
    ): newPromise<TResult1 | TResult2> {
        onFulfilled = (typeof onFulfilled === 'function' ?
            onFulfilled : (val: any) => val)
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

    catch<TResult = never>(onRejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined): newPromise<T | TResult> {
        return this.then(null, onRejected)
    }

    static resolve<TResult = void>(value?: TResult | PromiseLike<TResult>): newPromise<TResult> {
        if (value instanceof newPromise) {
            return value
        } else {
            const promise1 = new newPromise<TResult>((resolve, reject) => {
                setTimeout(() => {
                    resolvePromise(promise1, value!, resolve, reject)
                })
            })
            return promise1
        }
    }

    static reject<T = never>(reason: any): newPromise<T> {
        const promise1 = new newPromise<T>((resolve, reject) => {
            reject(reason)
        })
        return promise1
    }

    // finally(onFinally) === then(onFinally,onFinally)    

    finally(onFinally?: (() => void) | undefined | null): newPromise<T> {
        onFinally = (typeof onFinally === 'function' ?
            onFinally : () => { }) as any

        return this.then(
            _value => {
                return newPromise.resolve(onFinally!()).
                    then(value => _value,
                        reason => {
                            throw reason
                        })
            },
            _reason => {
                return newPromise.resolve(onFinally!()).then(
                    value => { throw _reason },
                    reason => {
                        throw reason
                    }
                )
            }
        )
    }

    static all<T extends readonly unknown[] | []>(values: T): newPromise<unknown[]> {
        type ResultType = { -readonly [P in keyof T]: Awaited<T[P]> }
        const promise1 = new newPromise<unknown[]>((resolve, reject) => {
            let count = 0
            const finishedLength = values.length
            let resultArray:unknown[]=[]
            values.forEach((item, index) => {
                if (item instanceof newPromise) {
                    item.then(value => {
                        count++
                        resultArray[index] = value
                        if (count === finishedLength) {
                            resolve(resultArray)
                        }
                    }, reason => {
                        reject(reason)
                    })
                } else {
                    count++
                    resultArray[index] = item
                    if (count === finishedLength) {
                        resolve(resultArray)
                    }
                }
            })

        })
        return promise1
    }

    static race<T extends readonly unknown[]|[]>(values:T):newPromise<unknown>{
        let count=0
        const finishedCount=values.length
        const promise1=new newPromise<unknown>((resolve,reject)=>{
            values.forEach((item)=>{
                if(item instanceof newPromise){
                    item.then(value=>{
                        resolve(value)
                    },reason=>{
                        reject(reason)
                    })
                }else{
                    resolve(item)
                }
            })
        })
        return promise1
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