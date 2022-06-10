import React, { useEffect } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { getProduct } from '../../route/routes'
import './index.css'

export default function Product() {
  const routes = getProduct()

  return (
    <div className='Product'>
      <Header h1='Product' p='这是我运用所学到的知识写的一个个小demo，方便记忆和回顾，其中运用的知识点是大项目的基础。' />
      <section>
        {routes.map(r => {
          return (
            <Card key={r.path}>
              <h3>{r.title}</h3>
              <div>
                <Link to={r.path === undefined ? '' : r.path}>
                  <span>demo</span>
                </Link>
              </div>
            </Card>)
        })}
      </section>
    </div>
  )
}
