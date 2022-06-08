import React from 'react'
import { Link } from 'react-router-dom'
import { getArtical } from '../../route/routes'
import './index.css'

export default function Artical() {
  const routes = getArtical()

  return (
    <div className='Artical'>
      <header>
        <h1>Artical</h1>
        <p>知识梳理笔记，都是用markdown书写再用 marked.js，highlight.js 转化成html</p>
      </header>
      <section>
        {routes.map((r, index) => {
          return <Link key={index} to={r.path === undefined ? '' : r.path}>{r.title}</Link>
        })}
      </section>
    </div>
  )
}
