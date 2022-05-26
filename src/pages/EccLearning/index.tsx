import React from 'react'
import { DocsifyContainer } from '../../components/DocsifyComponents'
import Code from '../../components/DocsifyComponents/Code'
import { Header } from '../../components/DocsifyComponents/Header'

export default function EccLearning() {
    return (
        <DocsifyContainer>
            <Header title='椭圆曲线加密算法(ECC)-基础'>
                <Header title='什么是椭圆曲线' size='h2'>
                    <Header title='椭圆-定义' size='h3'>
                        <img src='/images/椭圆定义.png' alt='loading...' title='椭圆定义' />
                    </Header>
                    <Header title='椭圆-周长' size='h3'>
                        <img src='/images/椭圆周长.png' alt='loading...' title='椭圆周长' />
                    </Header>
                    <Header title='椭圆-积分' size='h3'>
                        <img src='/images/椭圆积分1.png' alt='loading...' title='椭圆积分1' />
                        <img src='/images/椭圆积分2.png' alt='loading...' title='椭圆积分2' />
                    </Header>
                </Header>
                <Header title='什么是离散对数'>
                    <Header title='离散对数-定义' size='h2'>
                        <img src='/images/离散对数定义.png' alt='loading...' title='离散对数定义' />
                    </Header>
                    <Header title='离散对数问题(Discrete LogarithmProblem, DLP)' size='h2'>
                        <img src='/images/离散对数问题.png' alt='loading...' title='离散对数问题' />
                        <img src='/images/离散对数问题2.png' alt='loading...' title='离散对数问题2' />
                    </Header>
                </Header>
                <Header title='数论'>
                    <Header title='什么是阿贝尔群' size='h2'>
                        <img src='/images/数论-阿贝尔群.png' alt='loading...' title='阿贝尔群' />
                    </Header>
                    <Header title='什么是环' size='h2'>
                        <img src='/images/数论-环.png' alt='loading...' title='数论-环' />
                    </Header>
                    <Header title='什么是域' size='h2'>
                        <img src='/images/数论-域.png' alt='loading...' title='数论-域' />
                    </Header>
                    <Header title='域上的四则运算' size='h2'>
                        <img src='/images/数论-域上的四则运算.png' alt='loading...' title='数论-域上的四则运算' />
                    </Header>
                </Header>
            </Header>
            <Header title='椭圆曲线加密算法(ECC)-原理'>
                <Header title='椭圆曲线方程' size='h2'>
                    <img src='/images/椭圆曲线方程.png' alt='loading...' title='椭圆曲线方程' />
                    <h1 style={{ textDecoration: 'underline', margin: '20px 0' }}>椭圆曲线方程的名字由来</h1>
                    <img src='/images/椭圆曲线方程的名字由来.png' alt='loading...' title='椭圆曲线方程的名字由来' />
                </Header>
                <Header title='求解椭圆曲线点集' size='h2'>
                    <img src='/images/求解椭圆曲线方程点集.png' alt='loading...' title='求解椭圆曲线方程点集' />
                    <h1 style={{ textDecoration: 'underline', margin: '20px 0' }}>举个例子</h1>
                    <img src='/images/求解椭圆曲线方程点集2.png' alt='loading...' title='求解椭圆曲线方程点集2' />
                </Header>
                <Header title='椭圆曲线的加法' size='h2'>
                    <Header title='同余定理' size='h3'>
                        <Code>
                            m大于1 且a,b,m均为整数&
                            m|(a-b) 是 a ≡ b(mod m) 的充分必要条件&
                            m|(a-b) 表示 m mod (a-b) = 0&
                            a ≡ b(mod m) 表示 a mod m 与 b mod m 结果相同
                        </Code>
                    </Header>
                    <Header title='分数和负数的取余运算' size='h3'>
                        <h3>负数的取余</h3>
                        <Code>
                            -4 mod 7 = (-4 + 7) mod 7 = 3 mod 7 = 3&
                        </Code>
                        <h3>分数的取余</h3>
                        <Code>
                            m mod n = ?&
                            (1) 找到一个整数p使得1 / m + p = (1 + p * m) / m,令(1 + p * m) mod n = 0&
                            (2)
                        </Code>
                    </Header>
                    <img src='/images/椭圆曲线的加法.png' alt='loading...' title='椭圆曲线的加法' />
                    <img src='/images/椭圆曲线的加法2.png' alt='loading...' title='椭圆曲线的加法2' />
                    <img src='/images/椭圆曲线的加法3.png' alt='loading...' title='椭圆曲线的加法3' />
                    <h1 style={{ textDecoration: 'underline', margin: '20px 0' }}>举个例子</h1>
                    <img src='/images/椭圆曲线的加法4.png' alt='loading...' title='椭圆曲线的加法4' />
                </Header>
            </Header>
        </DocsifyContainer>
    )
}
