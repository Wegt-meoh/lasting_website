import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import MarkdownSlice from '../../../components/MarkdownSlice'

import './index.css'

export default function ReduxDemo() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className='reduxDemo-container'>
        <div className='leftPart'>
          <span>{count}</span>
          <button onClick={e=>{dispatch({type:'counter/increment'})}}>add</button>
        </div>
        <section>
          <MarkdownSlice
            src={'/mdFiles/knowlage/home.md'}
            languageSubset={['ts', 'python']}
            alt={'loading...'} />
        </section>
        <div className='rightPart'>
          
        </div>
      </div>
    </>
  )
}