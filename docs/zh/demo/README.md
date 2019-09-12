---
sidebar: false
---

# 示例Demo

灵活使用CSS，你可以使用 __[vuepress-plugin-svg-icon](https://github.com/ntnyq/vuepress-plugin-svg-icons)__ 创建出各种漂亮有趣的图标效果。

## 默认图标

<vp-icon-demo color="gray" />

## 自定义颜色

``` vue
<vp-icon name="vue" color="#3eaf7c" />
```

<vp-icon-demo />

## 结合CSS

::: tip
通过使用其他元素包裹 `svg`，可以很方便地利用 CSS 样式来定制图标的展现形式。
:::

### 背景

<vp-icon-demo bgc />

### 圆角

<vp-icon-demo round bgc />

## 文本

- <my-icon name="bai-yang" /> 白羊座
- <my-icon name="chu-nv" /> 处女座
- <my-icon name="jin-niu" /> 金牛座
- <my-icon name="ju-xie" /> 巨蟹座
- <my-icon name="mo-jie" /> 摩羯座
- <my-icon name="she-shou" /> 射手座
- <my-icon name="shi-zi" /> 狮子座
- <my-icon name="shuang-yu" /> 双鱼座
- <my-icon name="shuang-zi" /> 双子座
- <my-icon name="shui-ping" /> 水瓶座
- <my-icon name="tian-cheng" /> 天秤座
- <my-icon name="tian-xie" /> 天蝎座

## 段落

<p>
 <my-icon name="bai-yang" /> 白羊座 
 <my-icon name="chu-nv" /> 处女座 
 <my-icon name="jin-niu" /> 金牛座 
 <my-icon name="ju-xie" /> 巨蟹座 
 <my-icon name="mo-jie" /> 摩羯座 
 <my-icon name="she-shou" /> 射手座
</p>
<p>
 <my-icon name="shi-zi" /> 狮子座 
 <my-icon name="shuang-yu" /> 双鱼座 
 <my-icon name="shuang-zi" /> 双子座 
 <my-icon name="shui-ping" /> 水瓶座 
 <my-icon name="tian-cheng" /> 天秤座 
 <my-icon name="tian-xie" /> 天蝎座
</p>
