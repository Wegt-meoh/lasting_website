import React, { useEffect, useRef, useState } from 'react'
import { useDebouncing } from '../../utils/deBoucing'
import { useThrotting } from '../../utils/throtting'

export default function RefDemo() {
  const inputText = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState({ value: 1 })
  const deBouncingValue = useThrotting(value, 2000, 2000)

  useEffect(()=>{
    console.log('1')
    return ()=>console.log('2')
  })

  console.log(null == undefined)
  return (
    <div style={{ width: '200px', margin: '10px auto' }}>     
        <input name='test' ref={inputText} type="text" />
        <div>{value.value}</div>
        <div>{deBouncingValue.value}</div>
        <button onClick={() => {
          if (inputText.current === null) return
          inputText.current.focus()
          setValue((i) => {
            return { value: i.value + 1 }
          })
        }}>focus</button>
    </div>
  )
}
