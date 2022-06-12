# cookie-session

## CSRF（跨站请求伪造）

攻击者通过伪造浏览器请求，向用户已经身份认证的网站发送请求，使得目标网站接收并处理。

> ![csrf](/mdFiles/otherNote/images/csrf.jpeg)

## same-site

是cookie中的一个属性用于防止CSRF攻击。
same-site有三个枚举值：

1. strict

    完全禁止第三方cookie,只有当网页的url和请求目标一致才会带上cookie

2. lax

    规则稍微放宽

    |请求类型|示例|lax|
    |-------|---|---|
    |链接|`<a href='http://...'></a>`|发送|
    |预加载|`<link rel='prerender' href='http://...'></link>`|发送|
    |GET表单|`<form method='GET'></form>`|发送|
    |POST表单|`<form method='POST'></form>`|不发送|
    |iframe|`<iframe src='...'></a>`|不发送|
    |AJAX|`axios.get()`|不发送|
    |Image|`<img src=''/>`|不发送|

3. none

    对第三方cookie不做限制,但是要求Secure属性用于只通过https发送cookie

    `Set-Cookie: widget_session=abc123; SameSite=None; Secure`

## XSS

XSS全称Cross Site Scripting（跨站脚本），为了与“CSS”区别，就使用XSS作为简称。

1. 持久型XSS攻击

    跨站代码存储在数据库里

2. 反射型XSS攻击

    用户访问服务器-跨站链接-返回跨站代码

3. DOM跨站

    客户端文档对象脚本处理逻辑导致安全问题

## http-only

http only是包含在http返回头set-cookie中的一个附加属性，也就是后端对cookie设置的一个附加属性，能够禁止前端脚本读取cookie从而防止xss攻击。
