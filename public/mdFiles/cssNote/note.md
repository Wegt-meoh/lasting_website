# Css学习笔记

## 选择器优先级

1. 在属性后面加上`!important`
2. 內联样式也就是在标签上加样式
3. id选择器
4. 类选择器`.class{}`,属性选择器`.class[class='box']{}`，伪类选择器`a:hover{}`
5. 标签选择器`html{}`，伪元素选择器`.class::selection{}`
6. 通用选择器

```css
#container p{
    color:red;
}

#container .md p{
    color:blue;
}

//最终p的color为blue
```

## 组合方式

1. 后代选择`.father .child`
2. 子选择`.father>.child`
3. 相邻选择`.bro1+.bro2`，选择紧挨在bro1后面的bro2
4. 后续兄弟选择`h1 ~ p`，选择h1后面所有同级的p
