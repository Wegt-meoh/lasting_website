import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { RootState } from '../../store/store'

export default function ReduxDemo() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <>
      <label>count:</label><span>{count}</span>
      {/* <button onClick={()=>{dispatch()}}>add</button> */}
    </>
  )
}
