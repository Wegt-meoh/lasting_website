import React from 'react'
import { Card, Layout } from 'antd';
import { Link } from 'react-router-dom'
import { IndexLinkData, getAllLink } from '../../datas/IndexAppData'
import './index.css'
import { VerifiedOutlined } from '@ant-design/icons';
const { Header, Footer, Content } = Layout;


const linkData = getAllLink()
export default function Index() {
    return (
        <Layout className='Index'>
            <Header className='header'>
                <h2>Welcome to lasting website</h2>
            </Header>
            <Content className='content'>
                {linkData.map((i, index) => IndexApp(i, index))}
            </Content>
            <Footer className='footer'>
                <div>任何意见建议请联系：<span style={{ textDecoration: 'underline', color: 'rgb(160, 81, 11)' }}>lastingcoder@qq.com</span></div>
                <div>本站建立于：2022.01.31</div>
                <div>备案/许可证编号为：<VerifiedOutlined /><a href="http://beian.miit.gov.cn/">浙ICP备2022003490号</a></div>
            </Footer>
        </Layout>
    )
}

function IndexApp(props: IndexLinkData, index: number) {
    const { destination, title, cover, desc } = props
    return (
        <Link key={index} to={destination}>
            <Card
                style={{
                    maxWidth: '160px',
                    maxHeight: '220px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                }}
                cover={<img max-width='160px' max-height='220px' src={cover} />}
                hoverable={true}
                bodyStyle={{ backgroundColor: 'var(--light-blue)' }}
                size='default'>

                <Card.Meta
                    title={title}
                    description={desc} />
            </Card>
        </Link>
    )
}
