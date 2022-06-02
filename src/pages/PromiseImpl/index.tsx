import React, { useEffect, useState } from 'react'
import { newPromise } from './newPromise'

export default function PromiseImpl() {


    // promise应用，为了减少请求经常将数据缓存。
    const id2NameMap: { [index: string]: string } = {}
    // 返回类型为string | Promise<unknown> 不好判断
    function getNameById(id: string): string | Promise<unknown> {
        if (id2NameMap[id] !== undefined) return id2NameMap[id]
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                id2NameMap[id] = 'ttt'
                resolve('ttt')
            }, 2000)
        })
    }
    // 用promise.resolve解决
    Promise.resolve(getNameById('gg')).then(name => {
        console.log(name)
    })

    let p=new Promise((resolve)=>{
        resolve('xx')
    }).finally(()=>{
        console.log(p)
    })

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
    )
}
