# js八股文

## call,apply,bind的区别

    * 都可以改变函数的this指向
    * call,apply会调用函数,bind不会
    * call参数为arg1,arg2...而apply为数组

## new操作符具体都干了什么

    1. 创建一个空的object
    2. 将新对象和构造函数通过原型链连接起来
    3. 绑定构造函数的this为这个新对象
    4. 根据构造函数返回类型返回对象

## 事件冒泡，宏任务和微任务

    1. 事件冒泡指的是所有同步任务都在主线程上执行形成执行栈。执行栈之外还有一个消息队列，用于存放要执行的异步任务。先读取执行栈，执行栈空了之后再读取消息队列中的异步任务，消息队列空了之后又去读取执行栈如此往复。
    2. 宏任务是指事件冒泡在每个阶段执行的任务
    3. 微任务是指事件冒泡再每个阶段之间执行的任务

## http缓存和协商缓存

    1. 缓存能够提高性能
    2. 缓存分类强缓存、协商缓存
    3. 强缓存：expires和cache-control。设定一个缓存时间，未过期则直接使用缓存，过期则比较缓存。
    4. 协商缓存由last-modify & E-tag控制。将这两个发给服务器校验，返回304直接使用缓存

## Ajax解决浏览器缓存

    1. 请求头设置字段cache-control:no-cache
    2. ...

## Ajax原理

    > ajax即异步的js和xml
    1. 浏览器委托XmlHttpRequest对象向服务器发送请求
    2. 获得相应数据后用js改变dom

## js基本数据类型

| Type | Explanation |
|:-|:-|
|Number|a double-precision IEEE 754 floating point.|
|String|an immutable UTF-16 string.|
|BigInt|integers in the arbitrary precision format.|
|Boolean|true and false|
|Symbol|a unique value usually used as a key.|
|Null|equivalent to the unit type.|
|Undefined|also equivalent to the unit type.|
|Object|similar to records.|

typescript的内置类型几乎一致，以下还有其他重要的类型

|Type|Explanation|
|:-|:-|
|unknow|the top type|
|never|the bottom type|
|object literal|eg {property:Type}|
|void|a subtype of undefined intended for use as a return type.|
|T[]|a mutable array also written Array\<T>|
|[T,T]|tuples, which are fixed-length but mutable|
|(t: T) => U|functions|
