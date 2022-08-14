import axios from "axios";
import { resolve } from "path";
import React, { useEffect, useState } from "react";
import { newPromise } from "./newPromise";

export default function PromiseImpl () {
    // promise应用，为了减少请求经常将数据缓存。
    const id2NameMap: { [index: string]: string } = {};
    // 返回类型为string | Promise<unknown> 不好判断
    function getNameById (id: string): string | Promise<unknown> {
        if (id2NameMap[id] !== undefined) return id2NameMap[id];
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                id2NameMap[id] = "ttt";
                resolve("ttt");
            }, 2000);
        });
    }
    // 用promise.resolve解决
    Promise.resolve(getNameById("gg")).then(name => {
        console.log(name);
    });

    const idNameMap: { [index: string]: string } = {};

    function getName (id: string): void {
        if (idNameMap[id] !== undefined) {
            console.log(idNameMap[id]);
            return;
        }
        axios.get("").then(value => {
            idNameMap[id] = value.data.name;
            console.log(idNameMap[id]);
        }, reason => {
            alert(reason);
        });
    }

    // let p=new newPromise((resolve,reject)=>{
    //     resolve('a')
    // })
    // let k=p.finally(()=>{
    //     return new Promise((resolve)=>{
    //         resolve('diff')
    //     })
    // })

    // let p = newPromise.resolve('ee').then((value: unknown) => { console.log('value') }, (reason: unknown) => { console.log('error') })
    // let k = p.finally(() => {
    //     return Promise.resolve(Promise.resolve('error'))
    // })

    // 有若干个不同url的后端接口他们的返回值相同，找出最快返回的接口url
    function fastest (urlList: string[]): void {
        Promise.race(urlList.map(async url => {
            return await new Promise((resolve, reject) => {
                axios.get(url).then(value => {
                    resolve(url);
                }, reason => {
                    reject(reason);
                });
            });
        })).then(value => {
            console.log(value);
        });
    }

    const p = Promise.all([
        new Promise((resolve, reject) => {
            setTimeout(() => [
                reject(111)
            ], 500);
        }),
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(222);
            }, 1000);
        })
    ]).then(value => {
        console.log("all result");
        console.log(value);
    }, reason => {
        console.log("all failed");
        console.log(reason);
    });

    setTimeout(() => {
    // console.log(p)
    // console.log(k)
    }, 1000);

    return (
        <>
            1
            2
            3
            before timeout
            also before timeout
            4
            test
        </>
    );
}
