import React from 'react'
import './index.css'


export default function Footer() {
  return (
    <footer className='Footer'>
      <div>
        <div>任何意见建议请联系：<span style={{ textDecoration: 'underline', color: 'rgb(160, 81, 11)' }}>lastingcoder@qq.com</span></div>
        <div>本站建立于：2022.01.31</div>
        <div>备案/许可证编号为：<a target='_blank' rel='noreferer' href="http://beian.miit.gov.cn/">浙ICP备2022003490号</a></div>
      </div>
    </footer>
  )
}
