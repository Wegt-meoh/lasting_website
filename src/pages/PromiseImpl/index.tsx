import { Button, Form, Input } from 'antd'
import useForm from 'antd/lib/form/hooks/useForm'
import axios from 'axios'
import { resolve } from 'node:path/win32'
import React, { useEffect, useState } from 'react'
import newPromise from './newPromise'

export default function PromiseImpl() {
    let promise = new Promise((resolve, reject) => {
        throw new Error('')
        setTimeout(() => {
            resolve('username')
        }, 2000)
    }).then(username => {
        console.log(username)
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                try{
                    throw new Error('')
                }catch(e){
                    reject(e)
                }
            },1000)                
        })
    }, reason => {
        console.log('no such username')
        return new Promise((resolve,reject)=>{
            reject('')
        })
    }).then(password => {
        console.log(password)
    }, reason => {
        console.log('can not find password')
    })


    setTimeout(() => {
        // console.log(promise)
        // console.log(promise2)
        // console.log(promise3)
    })

    return <></>
}
