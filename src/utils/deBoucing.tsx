import { useEffect, useState } from "react"

function deBouncing(func: (...args: any[]) => any, delay: number) {
    let timer: NodeJS.Timeout | null = null
    return function () {
        if (timer !== null) clearTimeout(timer)
        timer = setTimeout(func, delay)
    }
}

function useDebouncing(values:any,delay:number){
    const [debounceValue,setDebounceValue]=useState(values)
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setDebounceValue(values)
        },delay)
        return ()=>{clearTimeout(timer)}
    },[values,delay])
    return debounceValue
}

export {deBouncing,useDebouncing}