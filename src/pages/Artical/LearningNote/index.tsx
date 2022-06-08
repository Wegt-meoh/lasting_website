import { Button, Form, Input } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import axios from 'axios'
import React, { ReactChild, useEffect, useState } from 'react'
import MarkdownSlice from '../../../components/MarkdownSlice'
import { DocsifyContainer } from '../../../components/DocsifyComponents'
import { Header } from '../../../components/DocsifyComponents/Header'

export default function LearningNote() {
    return (
        <DocsifyContainer>
            <Header title='面试实战（北京司索科技技术面）' size='h1'>
                <p>
                    后端三个接口，判断哪个接口返回最快，三个接口的返回值时一样的。                    
                </p>               
                <p>
                    antd的form写一个简单的登陆界面，要求账号为邮箱格式，密最短为6位要求有提示。
                    点击按钮在控制台打印这些值。
                    一开始账号没有要求邮箱，
                    后来又问知不知道useForm这个hook。
                    {f1() as ReactChild}
                </p>
                <p>
                    类似于验证码倒计时60秒。
                    写一个钩子函数返回倒计时时间和一个reset函数。
                    还有扩展，时间不够，面试官没深入了。
                    {f2() as ReactChild}
                </p>
                <p>
                    create-react-app的eject具体做了什么
                </p>
            </Header>
            <Header title='typescript中的特殊符号' size='h1'>
                <ol>
                    <li>属性或参数中使用 ？：表示该属性或参数为可选项</li>
                    <li>属性或参数中使用 ！：表示强制解析（告诉typescript编译器，这里一定有值），常用于vue-decorator中的@Prop</li>
                    <li>变量后使用 ！：表示类型推断排除null、undefined</li>
                </ol>
            </Header>
        </DocsifyContainer>
    )
}

const request = (delay: number) => {
    return (resolve: (value: unknown) => void, index: number) => {
        setTimeout(() => {
            resolve(index)
        }, delay)
    }
}

// const requestArray = [request(5000), request(10000), request(3000)]

// const res = Promise.race(requestArray.map((request, index) => {
//     return new Promise((resolve) => {
//         request(resolve, index)
//     })
// }))

// console.log(res)

const f = (): any => {
    const fastest = (urlData: string[]) => {
        return Promise.race(urlData.map(url => {
            return new Promise((resolve) => {
                axios.get(url).then(e => resolve(url))
            })
        }))
    }
}
const f1 = (): any => {
    const FormDemo = () => {
        interface UserData {
            username: string
            password: string
        }

        const [form] = useForm<UserData>()

        function formOnFinish(value: UserData) {
            console.log(value)
            console.log(form.getFieldsValue())
        }

        return (
            <Form
                form={form}
                onFinish={formOnFinish}>
                <Form.Item
                    name='username'>
                    <Input type='email' />
                </Form.Item>
                <Form.Item
                    name='password'>
                    <Input.Password minLength={6} />
                </Form.Item>
                <Button htmlType='submit'>submit</Button>
            </Form>
        )
    }
}

const f2 = (): any => {
    function useCount(total: number): [number, () => void] {
        const [current, setCurrent] = useState(total)

        useEffect(() => {
            let timer: null | NodeJS.Timeout = null
            if (current > 0) {
                timer = setTimeout(() => {
                    setCurrent(v => v - 1)
                }, 1000)
            }
            return () => {
                if (timer !== null) clearTimeout(timer)
            }
        }, [current])

        return [current, () => { setCurrent(total) }]
    }
}