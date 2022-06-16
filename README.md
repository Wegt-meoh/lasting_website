# 这是一个开源的个人网站

## 简介

* 你可以提交你的作品,我会把源代码部署到服务器上
* 你可以使用网站的任何资源
  
## 云端地址

<a target="_blank" href="'http://www.lastingcoder.xyz'">主站</a>

## 技术难点

1.主题样式的切换和组件间通信。解决方法采用在类选择器下写css变量，要变化主题就修改app组件的类名，在siderbat组件中的主题切换按钮的点击事件是通过redux传递给app组件以此实现类名修改，并用localstorage做了本地化存储。

2.用网页展示markdown文件。解决方法是先用axios请求markdown文件的静态资源，得到文本后用marked.js和highlight.js处理转化为html格式的文本，再用dangerouslySetInnerHTML属性将文本渲染成html。整个逻辑已封装成组件。

3.单页面应用css样式冲突问题。解决方法在样式前加不重复的前缀，或者对于每个组件都用一个div作为最外层的元素，然后将组件名作为id赋值给这个div，这个组件的所有样式之前都用id选择器过滤。

4.屏幕尺寸适配和字体大小问题。解决方法用媒体查询做到响应式布局，字体大小单位用rem替代px。

5.图片懒加载。用IntersectionObserver监听需要懒加载的图片，所有要懒加载的图片的src设置为同一张图片，data-src设置为真实的图片路径，等到图片滚动到一定位置时调用回调函数将data-src赋值给src并且取消监听。
