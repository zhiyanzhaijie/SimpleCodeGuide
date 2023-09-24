---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 极简编程入门
titleTemplate: 让计算机成为你的生产力

hero:
  name: "极简编程入门"
  text: "技术提纲"
  tagline: 让计算机成为你的生产力
  image: 
    src: /home.svg
    alt: code, sure the hammer and sickle
  actions:
    - theme: brand
      text: 快速入门 👉
      link: /basic/tool/markdown
    - theme: alt
      text: 加入我们
      link: /

features:
  - icon: 🛠️
    title: 选择你的开发工具
    details: 
      现代化的程序开发离不开同样现代化的开发工具。通常，当计算机帮我们执行代码前，需要一系列工具将代码变为机它能识别的代码。随着技术变更，工具也变得越来越符合人的使用直觉。<br/>
      <br />所以，在开始编程前，请确保你使用了生产市场上前沿的开发工具，它会作为你最好的朋友陪伴你的开发进程。
    link: /basic/tool/
    linkText: 工具与环境篇
  - icon: 🏗️
    title: 在项目实践中形成系统知识
    details: 
      正如本站标题的“极简”两字，本站推荐的学习路径为--从实践到理论。这当然不是因为我们确信从实践到理论比起从理论到实践来是更可靠的学习路径，我们只确信该路径可行，并且以自身作为实践先例。 <br />
      <br />
      从实践入手意味着我可以先实现一些想法--正如本站，这很激励人心，也非常符合计算机领域侧重实现的特性。所以，本站将以目前行业普遍的开发体系为对象，分别对多端开发进行入门级的技术样例讲解，实现对应技术的demo样例，或者一个、多个完整的项目，即可以服务于人的代码。在这之后，如果诱发了你对计算机生产力的震撼，本站荣幸至极。
    link: /project/dev/
    linkText: 开发实战篇
  - icon: 🔍
    title: 从经验回到原理
    details: 
      如果你已经坚持到了这里，相信你已经与计算机成为了好朋友，或者仅是你的工具。 <br />
      <br />
      你当然可以止步于此，使用已有的知识开发一些有价值的代码成果，就像你初学时那样。但，如果在习惯了”是什么(What)“与”怎么做(How)“之后，你开始对”Why(为什么)“有着莫大热情，你应当会主动地去寻找--你的工具们（第三方库，第三方框架，甚至你工具的工具--计算机本身，它们的实现原理。<br />
      <br />
      本站知识有限，宽阔又浩瀚的知识汪洋留待你自身的启航。
    link: /
    linkText: 意思意思篇
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(45deg, rgb(237, 44, 37) 3%, rgb(253, 207, 48));

  --vp-home-hero-image-background-image: linear-gradient(-27deg, rgb(237, 44, 37) 20%, rgb(253, 207, 48) 80%);
  --vp-home-hero-image-filter: blur(60px);
}
</style>
