"use strict";
// 本promise实现遵循promises/A+
// 官网：https://promisesaplus.com/
exports.newPromise = void 0;
var PromiseState;
(function (PromiseState) {
    PromiseState["PENDING"] = "pending";
    PromiseState["FULFILLED"] = "fulfilled";
    PromiseState["REJECTED"] = "rejected";
})(PromiseState || (PromiseState = {}));
var newPromise = /** @class */ (function () {
    function newPromise(executor) {
        var _this = this;
        this.state = PromiseState.PENDING;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        this.resolve = function (value) {
            try {
                setTimeout(function () {
                    if (_this.state !== PromiseState.PENDING)
                        return;
                    _this.state = PromiseState.FULFILLED;
                    _this.value = value;
                    _this.onFulfilledCallbacks.forEach(function (fn) { return fn(); });
                    _this.onFulfilledCallbacks = [];
                });
            }
            catch (error) {
                _this.reject(error);
            }
        };
        this.reject = function (reason) {
            try {
                setTimeout(function () {
                    if (_this.state !== PromiseState.PENDING)
                        return;
                    _this.state = PromiseState.REJECTED;
                    _this.reason = reason;
                    _this.onRejectedCallbacks.forEach(function (fn) { return fn(); });
                    _this.onRejectedCallbacks = [];
                });
            }
            catch (error) {
                _this.reject(error);
            }
        };
        this.then = function (onFulfilled, onRejected) {
            onFulfilled = (typeof onFulfilled === 'function' ?
                onFulfilled : function (val) { return val; });
            onRejected = typeof onRejected === 'function' ?
                onRejected : function (r) { throw r; };
            var promise1 = new newPromise(function (resolve, reject) {
                switch (_this.state) {
                    case PromiseState.FULFILLED:
                        setTimeout(function () {
                            try {
                                var x = onFulfilled(_this.value);
                                _this.resolvePromise(promise1, x, resolve, reject);
                            }
                            catch (error) {
                                reject(error);
                            }
                        });
                        break;
                    case PromiseState.REJECTED:
                        setTimeout(function () {
                            try {
                                var x = onRejected(_this.reason);
                                _this.resolvePromise(promise1, x, resolve, reject);
                            }
                            catch (error) {
                                reject(error);
                            }
                        });
                        break;
                    case PromiseState.PENDING:
                        _this.onFulfilledCallbacks.push(function () {
                            try {
                                var x = onFulfilled(_this.value);
                                _this.resolvePromise(promise1, x, resolve, reject);
                            }
                            catch (error) {
                                reject(error);
                            }
                        });
                        _this.onRejectedCallbacks.push(function () {
                            try {
                                var x = onRejected(_this.reason);
                                _this.resolvePromise(promise1, x, resolve, reject);
                            }
                            catch (error) {
                                reject(error);
                            }
                        });
                        break;
                }
            });
            return promise1;
        };
        try {
            executor(this.resolve, this.reject);
        }
        catch (error) {
            this.reject(error);
        }
    }
    newPromise.prototype.resolvePromise = function (promise, x, resolve, reject) {
        var _this = this;
        if (x === promise) { // 2.3.1
            reject(new TypeError('TypeError:circular reference'));
        }
        else if (Object.prototype.toString.call(x) === '[object newPromise]') {
            var resolved_1 = false;
            var then = x.then;
            then(function (value) {
                if (resolved_1)
                    return;
                resolved_1 = true;
                resolve(value);
            }, function (reason) {
                if (resolved_1)
                    return;
                resolved_1 = true;
                reject(reason);
            });
        }
        else if (x !== null && (typeof x === 'object' || typeof x === 'function')) { //2.3.3                        
            var resolved_2 = false;
            try {
                var then = x.then;
                if (typeof then === 'function') {
                    then.call(x, function (y) {
                        if (resolved_2)
                            return;
                        resolved_2 = true;
                        _this.resolvePromise(promise, y, resolve, reject);
                    }, function (r) {
                        if (resolved_2)
                            return;
                        resolved_2 = true;
                        reject(r);
                    });
                }
                else {
                    if (resolved_2)
                        return;
                    resolved_2 = true;
                    resolve(x);
                }
            }
            catch (error) {
                if (resolved_2)
                    return;
                resolved_2 = true;
                reject(error);
            }
        }
        else {
            resolve(x);
        }
    };
    return newPromise;
}());
// @ts-ignore
newPromise.defer = newPromise.deferred = function () {
    var deferred = {};
    deferred.promise = new newPromise(function (resolve, reject) {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });
    return deferred;
};
module.exports = newPromise;
