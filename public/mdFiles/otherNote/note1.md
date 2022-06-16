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
