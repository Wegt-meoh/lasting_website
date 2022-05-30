const Promise_PENDING = 'pending'
const Promise_FULFILLED = 'fulfilled'
const Promise_REJECTED = 'rejected'
type PromiseState = typeof Promise_FULFILLED | typeof Promise_PENDING | typeof Promise_REJECTED
function isFunction(arg: unknown) { return typeof arg === 'function' }
function isNotNone(arg: unknown) { return (arg !== null && arg !== undefined) ? true : false }
export default class newPromise {
    state: PromiseState = Promise_PENDING
    value: unknown = undefined
    successCallbackArray: Array<{
        successCallback: ((arg: unknown) => unknown) | null | undefined,
        resolve: (value: unknown) => unknown,
        reject: (reason: unknown) => unknown
    }> = []
    failedCallbackArray: Array<{
        failedCallback: ((arg: unknown) => unknown) | null | undefined,
        resolve: (value: unknown) => unknown,
        reject: (reason: unknown) => unknown
    }> = []

    resolve = (value: unknown): void => {
        if (this.state !== Promise_PENDING) return
        setTimeout(() => {
            if (value instanceof newPromise) {
                value.then(this.resolve, this.reject)
            } else {
                this.value = value
                this.state = Promise_FULFILLED
                this.successCallbackArray.forEach((successCallback) => {
                    if (successCallback.successCallback === undefined || successCallback.successCallback === null) {
                        successCallback.resolve(undefined)
                    } else {
                        try {
                            let result = successCallback.successCallback(value)
                            if (result instanceof newPromise) {
                                result.then(successCallback.resolve, successCallback.reject)
                            } else {
                                successCallback.resolve(result)
                            }
                        } catch (e) {
                            successCallback.reject(e)
                        }
                    }
                })
            }
        }, 0)
    }

    reject = (reason: unknown): void => {
        if (this.state !== Promise_PENDING) return
        setTimeout(() => {
            this.value = reason
            this.state = Promise_REJECTED
            this.failedCallbackArray.forEach((failedCallback) => {
                if (failedCallback.failedCallback === null || failedCallback.failedCallback === undefined) {
                    failedCallback.resolve(undefined)
                } else {
                    try {
                        let result = failedCallback.failedCallback(reason)
                        if (result instanceof newPromise) {
                            result.then(failedCallback.resolve, failedCallback.reject)
                        } else {
                            failedCallback.resolve(result)
                        }
                    } catch (e) {
                        failedCallback.reject(e)
                    }
                }
            })
        }, 0)
    }

    constructor(executor: (resolve: (value: unknown) => void, reject: (value: unknown) => void) => void) {
        try{
            executor(this.resolve, this.reject)
        }catch(e){
            this.reject(e)
        }
    }

    then = (successCallback: ((value: unknown) => unknown) | undefined | null, failedCallback: ((value: unknown) => unknown) | undefined | null): newPromise => {
        const { state: _state, value: _value } = this

        const _handler = (resolve: (value: unknown) => unknown, reject: (value: unknown) => unknown) => {
            switch (_state) {
                case Promise_PENDING:
                    // console.log('then pending state')
                    this.successCallbackArray.push({ successCallback: successCallback, resolve: resolve, reject: reject })
                    this.failedCallbackArray.push({ failedCallback: failedCallback, resolve: resolve, reject: reject })
                    break
                case Promise_FULFILLED:
                    // console.log('then fullfilled state')
                    if (successCallback === null || successCallback === undefined) {
                        // console.log('then successCallback is nullish')
                        resolve(_value)
                    } else {
                        try {
                            let result = successCallback(_value)
                            if (result instanceof newPromise) {
                                result.then(resolve, reject)
                            } else {
                                // console.log('successCallback')
                                resolve(result)
                            }
                        } catch (e) {
                            reject(e)
                        }
                    }
                    break
                case Promise_REJECTED:
                    if (failedCallback === null || failedCallback === undefined) {
                        resolve(undefined)
                    } else {
                        try {
                            let result = failedCallback(_value)
                            if (result instanceof newPromise) {
                                result.then(resolve, reject)
                            } else {
                                resolve(result)
                            }
                        } catch (e) {
                            reject(e)
                        }
                    }
                    break
                default:
                    throw new Error('unknow state')
            }
        }

        return new newPromise(_handler)
    }
}