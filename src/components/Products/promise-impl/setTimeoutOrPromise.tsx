import React from "react";

export default function setTimeoutOrPromise () {
    // 宏任务微任务
    // 原文：https://wenku.baidu.com/view/6ae64e36cf7931b765ce0508763231126edb7797.html
    // 第一题
    setTimeout(() => {
        setTimeout(() => {
            new Promise(resolve => {
                resolve("");
            }).then(val => {
                console.log("test");
            });
            console.log(4);
        });

        new Promise(resolve => {
            resolve("");
            console.log(1);
        }).then(value => {
            console.log(3);
            Promise.resolve().then(() => {
                console.log("before timeout");
            }).then(value => {
                Promise.resolve().then(value => {
                    console.log("also before timeout");
                });
            });
        });

        console.log(2);
    });

    // 第二题
    // 原文：https://www.jianshu.com/p/334b0e40b4dd
    setTimeout(() => {
        console.log(1);
        setTimeout(function () {
            console.log(2);
            new Promise((resolve) => {
                resolve("");
                console.log(3);
            }).then(() => {
                console.log(4);
            });
        });
        new Promise((resolve) => {
            console.log(5);
            resolve("");
        }).then(function () {
            console.log(6);
        });
        setTimeout(() => {
            console.log(7);
            new Promise(function (resolve) {
                resolve("");
                console.log(8);
            }).then(value => {
                console.log(9);
            });
        });
    }, 2000);

    return (
        <div>setTimeoutOrPromise</div>
    );
}
