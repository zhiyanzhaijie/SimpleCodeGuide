---
layout: doc
outline: deep
---
# Markdown入门

## 一、Markdown概况
  首先，`Markdown`是一门*语言*。语言的意思是**信息的载体**，而它包含的信息可以通过类似对话、阅读的方式被接收者接受。  

  那么，为什么这门语言你 ~~非学不可~~ 推荐你学呢？因为它是`标记型`语言。它可以将\`a\`变为`a`, 将\~\~b\~\~变为 ~~b~~ ,
  将下面这个  

  \`\`\`html  
  　　\<p\>这里是网站页面的背后样子--HTML\</p\>  
  \`\`\`

  变为这个  　　
  ```html  
   <p>这里是网站页面的背后样子--HTML</p>  
  ```
  实际上，你所阅读这篇文章正是由`Markdown`完成的。如果你正在使用电脑浏览器来看这篇文章，可以按下键盘上的`F12`功能打开浏览器的*开发者窗口*，默认打开的第一个标签页会显示如图：  

  ![F12现状](./img/image.png)  
  
  可见位于Element标签页顶部，有一列  

  ```html
    <!DOCTYPE html>
  ```  
  这里提到的`html`, 就是99.9%浏览器呈现的页面背后的实质文件。浏览器对`html`进行处理最后输出成我们所见的页面，这个操作每时每刻都发生在我们网上🏄‍的同时。  
  
  关于`html`与`Markdown`的解释有下：  
  > HTML（Hypertext Markup Language）是一种标记语言
  > 
  > Markdown是一种文本标记语言（Text Markup Language）
    
  `Markdown`本身就是用来快速转化为`html`的。从**使用角度**来看，
  ```js
    // 伪代码
    Markdown之于html == html之于浏览器
  ```
  现在请你想想，为什么我会向你推荐`Markdown`？想不出来算了，
  # 酷就完了
## 二、Markdown能做什么
  

## 三、如何使用Markdown
  通常而言，一门成熟的技术，学习它的最佳方式是阅读其官方文档并实现文档demo，对于这个论点而言，Markdown的学习方式就是极佳的证明。<br />
  Markdown的官方使用文档为[markdownguide](https://www.markdownguide.org/basic-syntax/)<br />
  非官方中文版也有，搜索直达[Markdown 官方教程](https://markdown.com.cn/)
