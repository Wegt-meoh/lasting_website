import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { getSortedArtical } from '../../route/routes'
import './index.css'

export default function Artical() {
  const routes = getSortedArtical()

  return (
    <div className='Artical'>
      <Header h1='Artical' p='知识梳理笔记，都是用markdown书写再用 marked.js，highlight.js 转化成html' />
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
