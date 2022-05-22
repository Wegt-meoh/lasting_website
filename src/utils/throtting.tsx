import { useEffect, useRef, useState } from "react"

function throtting(func: (...args: any[]) => any, delay: number, maxWaitTime: number) {
    let timer: NodeJS.Timeout | null = null
    let startTime = Date.now()
    return function () {
        if (timer !== null) clearTimeout(timer)
        const waitTime = Date.now() - startTime
        if (waitTime >= maxWaitTime) {
            func()
            startTime = Date.now()
        } else {
            timer = setTimeout(func, delay)
        }
    }
}

function useThrotting(values: any, delay: number, maxWaitTime: number) {
    const [throttingValue, setValue] = useState(values)
    const beginTime = useRef(Date.now())
    useEffect(() => {
        const timer = setTimeout(() => {
            setValue(values)
            beginTime.current=Date.now()
        }, delay)
        return () => {
            clearTimeout(timer)
            const waitTime = Date.now() - beginTime.current
            if (waitTime >= maxWaitTime) {
                setValue(values)
                beginTime.current=Date.now()
            }
        }
    }, [values, delay, maxWaitTime])
    return throttingValue
}

export { throtting, useThrotting }