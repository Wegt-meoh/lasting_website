# 面试实战

## 北京某公司

1. 后端三个接口，判断哪个接口返回最快，三个接口的返回值是一样的。

    ```ts
    const fastest = (urlData: string[]) => {
        return Promise.race(urlData.map(url => {
            return new Promise((resolve) => {
                axios.get(url).then(e => resolve(url))
            })
        }))
    }
    ```

2. antd的form写一个简单的登陆界面，要求账号为邮箱格式，密最短为6位要求有提示。点击按钮在控制台打印这些值。一开始账号没有要求邮箱，后来又问知不知道useForm这个hook。

    ```ts
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
    ```

3. 类似于验证码倒计时60秒。写一个钩子函数返回倒计时时间和一个reset函数。还有扩展，时间不够，面试官没深入了。

    ```ts
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
    ```

## 顺丰前端

### 一面

   1. 自我介绍
   2. position的值分别有哪些？分别解释下
      1. absolute
         1. 绝对定位相对于最近的非static定位的父级元素
      2. relative
      3. static
      4. inherit
   3. absolute是如何定位的
   4. box-sizing的值有哪些？分别介绍下
      1. content-box这是默认值
      2. border-box
   5. 常用的布局有哪些
      1. flex
      2. grid
   6. flex布局如何改变主轴方向
   7. 如何实现垂直居中
      1. flex
      2. grid
      3. absolute
   8. js基本数据类型
      1. Number
      2. Boolean
      3. String
      4. Bigint
      5. Object
      6. Symbol
      7. Null
      8. Undefined
   9. 常用的类型判断方法
      1. typeof
      2. Object.propotype.toString.call
      3. instanceof
      4. Object.is
   10. 对比typeof和instanceof
   11. ES6新特性
   12. let和const区别
   13. 普通函数和箭头函数区别
   14. 代码题：统计字符串中出现次数最多的字符
   15. 代码题：手写快速排序（排序效果稳定吗？）
   16. 操作系统中进程和线程的区别
   17. 了解多线程吗
   18. 浏览器内核由哪些进程实现资源的加载和渲染
   19. 浏览器的事件循环
   20. js实现异步编程的方式有哪些
   21. 为什么学习react
   22. react hooks解决什么问题
   23. react function组件如何模拟class组件的生命周期
   24. 了解前端打包构建工具吗
   25. loader和plugins的区别
   26. 什么是跨域问题
   27. 如何解决跨域问题
   28. 你遇到的一个印象深刻的问题，如何定位问题和解决问题的？
   29. 你觉得你在工作和技术上的优势

### 二面

   1. 项目经历中用到的react，讲一下react生命周期
   2. 自我介绍
   3. 与后端服务器进行交互一般在那个生命周期中进行
   4. 为什么放到这个生命周期中
   5. 项目中用到了react hook,分别用到了哪些？
   6. 解释下useEffect的参数
   7. 1左移4位对应的十进制数是多少
   8. 一道考查[...arr]的题
   9. 写一个方法返回四个奖品，这四个奖品的概率为5%，15%，25%，55%
   10. 如何实现三角形
   11. 如何控制三角形大小
   12. 讲下webpack配置
   13. 有用到热更新的功能吗
   14. loader和plugins分别处理什么
   15. 如何配置生成压缩的代码
   16. 你是用什么创建react项目的
   17. 为什么生产模式的生成的代码会被压缩
   18. git如何创建删除分支
   19. git branch -d -D有什么区别
   20. promise代码题
   21. 平时学习前端的途径
   22. 项目中微信小程序app.json的作用
   23. 了解小程序分包的机制吗
   24. 页面上有一个a标签，点击一次打印1，再点击一次打印2
