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
          return <ArticalItem key={index} path={r.path} title={r.title} date={r.date} />
        })}
      </section>
    </div>
  )
}

interface ArticalItemProps {
  title: string
  date?: string
  path?: string
}

function ArticalItem(props: ArticalItemProps) {
  const { title, date, path } = props

  return (
    <Link className='ArticalItem' to={path === undefined ? '' : path}>
      <h3>{title}</h3>
      <span>{date}</span>
    </Link>
  )
}
