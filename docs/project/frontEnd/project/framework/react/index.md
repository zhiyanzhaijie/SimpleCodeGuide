---
layout: doc
outline: deep
---

# React

## UI框架？

  > UI框架（❌） 别人写好的工具（✅）  

  问题来了，为什么要有写这个工具？


::: warning 这有一篇博文
[现代 js 框架存在的根本原因](https://segmentfault.com/a/1190000014947677)
:::

我极赞成上面文章的观点。也就是，框架解决了下面的问题：  

1. 迎合组件化  
2. UI 与 state 的同步  
  `ui = f(state)`


## React的理念

实际上，全部的前端框架的原理公式（如果有的话），都是

 `ui = f(state)`  

 其中，
 - `ui`(userInterface)是「用户交互图形界面」
 - `state`是「数据在某一时刻的快照」
 - `f()`是*ui*与*state*的「同步机制」

 在上面几个部分中，`ui`是目的，`state`和`f`是手段。前端框架的目的都是一致的，不同点就只能在`f()`和`state`中找。




 ### 主流框架的「f」与「state」对比

  为了加深大家对`UI = f(state)`的认识，下面对比几个主流框架对这个公式的实现。  

 [主流框架的同步机制](https://www.bilibili.com/video/BV1nU411F7dB?p=4)

 ### React的--「dom树」与「state快照」

  > 将UI视为树          --  React官方文档  
  > state如同一张快照    --  React官方文档  

::: info 原文
 [将UI视为树](https://react.docschina.org/learn/understanding-your-ui-as-a-tree)

 [state是一张快照](https://react.docschina.org/learn/state-as-a-snapshot)
:::
 上面的官方文档写的特好，所以我就不写了，但是可以bb几句。

## 在项目中使用React

  必须掌握以下内容：

  1. 响应式
  2. prop/store -> 数据流
  3. router -> 大体量的UIs





 
