# Knowledge

## 资源整理

---

### mac电脑安装homebrew

* <a href='https://zhuanlan.zhihu.com/p111014448' target='_blank' rel='noferer'>知乎的安装页面</a>

### react教程

* <a>bilibili的视频教程链接</a>

### 加速克隆

>在链接中加`gitclone.com`即可

* git clone <https://gitclone.com/github.com/xxx> 加速克隆

### docsify

>神奇的文档初始化工具

* <a href='https://docsify.js.org/#/' target='_blank' rel='noreferer'>官方网站</a>

### Nginx

>An HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server, originally written by Igor Sysoev.

* <a href='http://nginx.org/en/' target='_blank' rel='noreferer'>官方网站</a>
* [安装教程](https://www.runoob.com/linux/nginx-install-setup.html)

---

## 教程

---

### 下载reactJS的步骤(用于实验图片懒加载)

1. 进入<a href='https://reactjs.org/'>react官网</a>按下图依次点击链接
   
<img data-src='/mdFiles/knowlage/images/001.png' src='/mdFiles/knowlage/images/001.png' />
<img data-src='/mdFiles/knowlage/images/002.png' src='/mdFiles/knowlage/images/001.png' />

2. 下图中的链接就是下载源，这里我点击第一个链接
   
<img data-src='/mdFiles/knowlage/images/003.png' src='/mdFiles/knowlage/images/001.png' />

3. 进入到下面这个页面后点击，你想要下载的js文件

<img data-src='/mdFiles/knowlage/images/004.png' src='/mdFiles/knowlage/images/001.png'/>

4. 然后进入预览页面

<img data-src='/mdFiles/knowlage/images/005.png' src='/mdFiles/knowlage/images/001.png'/>

5. 修改浏览器地址栏内容如下图，然后键入回车浏览，这个地址就是我们要的地址，用wget命令下载到你需要的位置即可

<img data-src='/mdFiles/knowlage/images/006.png' src='/mdFiles/knowlage/images/001.png'/>

### Linux chmod 修改权限

1. 首先先了解Linux中权限的表示
    <img src='/mdFiles/knowlage/images/008.png' width='400px'/>
    关注 `drwxr-xr-x`
    一共有十位，其中第一位为一组，其他九位每连续三个为一组共四组<br/>
    第一组只有一位，有四种情况

    ```python
    switch(t):
        case 'd':
            '目录,存储介质比如U盘'
            break
        case '-':
            '文件'
            break
        case 'l':
            '链接'
            break
        case 'c':
            '一次性读取设备比如鼠标、键盘'
            break
    ```

    其他三组按顺序依次表示的身份为owner，group，others
    每一组内的三位依次控制`读、写、执行`，三位中每一位上 `-` 都表示拒绝,第一位表示可读则为`r` ，第二位表示可写则为`w` ，第三位表示可执行则为`x`

    ```
    这里举一个例子
    drw-r-----：文件类型是文件夹，他的拥有者可读写不可执行，所属群组可读不可写不可执行，其他人不可读写和执行
    ```

2. chmod命令<br/>
   `chmod 774 ~/test.txt`
   上面这条命令用的是数字符号分配权限，这里的774三位数字就每一位对应着上面提到的owner,group,others三个组。

   ```
   把每一位的数字转换成三位二进制数字
   比如7=>111,就对应了rwx,4=>100,表示r--
   ```

### 尝试用下图的格式书写你的api文档

> ![](/mdFiles/knowlage/images/trtr.png)

### typescript

```ts

Promise.resolve(1).then(value=>{
    console.log(value)
})

class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax

```
