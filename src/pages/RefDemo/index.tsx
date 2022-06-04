import React, { useEffect, useRef, useState } from 'react'
import { useDebouncing } from '../../utils/deBoucing'
import { useThrotting } from '../../utils/throtting'

export default function RefDemo() {
  const inputText = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState({ value: 1 })
  const deBouncingValue = useThrotting(value, 2000, 2000)
  const [current, reSet] = useCount2(5)

  return (
    <div style={{ width: '200px', margin: '10px auto' }}>
      <input name='test' ref={inputText} type="text" />
      <div>
        <label>
          count={current}
        </label>
      </div>
      <div>{value.value}</div>
      <div>{deBouncingValue.value}</div>
      <button onClick={() => {
        reSet()
        if (inputText.current === null) return
        inputText.current.focus()
        setValue((i) => {
          return { value: i.value + 1 }
        })
      }}>focus</button>
    </div>
  )
}

function useCount(total: number): [number, () => void] {
  const [current, setCurrent] = useState(total)

  useEffect(() => {
    let timer: null | NodeJS.Timeout = null
    if (current > 0) {
      timer = setTimeout(() => {
        setCurrent(v => v - 1)
      }, 1000)
    }
    return () => {
      if (timer !== null) clearTimeout(timer)
    }
  }, [current])

  return [current, () => { setCurrent(total) }]
}

function useCount2(total: number): [number, () => void] {
  const [current, setCurrent] = useState(total)

  const callback = () => {
    let timer = setTimeout(() => {
      if (current > 0) {
        console.log(current)
        setCurrent(v => v - 1)
      }
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }
  useEffect(callback, [current])
  return [current, () => { setCurrent(total) }]
}

// function componentDidMount(callback: () => any) {
//   useEffect(callback, [])
// }

// function componentUpdate(callback:()=>any){
//   useEffect(callback)
// }

// function componentWillUnmount(callback:()=>any){
//   useEffect(()=>{
//     return callback
//   },[])
// }
