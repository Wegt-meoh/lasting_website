import React from 'react'
import { Card, Layout } from 'antd';
import { Link } from 'react-router-dom'
import { IndexLinkData, getAllLink } from '../../datas/IndexAppData'
import './index.css'
import IndexFooter from '../../components/IndexFooter';
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
            <IndexFooter/>            
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
