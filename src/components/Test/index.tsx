import axios from 'axios'
import React from 'react'

export default function Test() {

    return (
        <div onClick={e=>{
            console.log('div')
            console.log(e)
        }}>
            <label onClick={e=>{
                e.stopPropagation()
                console.log('label')
                console.log(e)
            }}>sadfasfa</label>
            <img src="" title='' alt="" />
        </div>
    )
}

export type AnyFunc=(...arg:any[])=>any

function deboucing(callback:(...arg:any[])=>any,interval:number){
    let timer:NodeJS.Timeout|null=null
    return ()=>{
        if(timer!==null) clearTimeout(timer)
        timer=setTimeout(callback,interval)
    }
}

function throtting(callback:AnyFunc,interval:number,delay:number){
    let timer:NodeJS.Timeout|null=null
    let startTime=Date.now()

    return (...args:any[])=>{
        const waitTime=Date.now()-startTime
        if(timer!==null) clearTimeout(timer)
        if(waitTime>=interval){
            callback.apply(args)
            startTime=Date.now()
        }else{
            timer=setTimeout(callback,delay)
        }
    }
}