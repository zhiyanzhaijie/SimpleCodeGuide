---
layout: doc
outline: deep
---

# 前端项目

## 什么是前端项目？

  我们拆开来看。`前端项目 = 前端 + 项目`，`前端`大家已经不陌生了，那么我们来看看`项目`。如果你在搜索引擎查找百科的普及解释，`项目是一个任务`。  

  项目、任务是带有`目的`的，在软件开发领域，这个目的就是`实现一个功能程序`。所以，从目的上讲，`做项目`就是`实现一个带有功能的软件程序`。  

  那么，`前端项目`就是`用前端技术实现的带有功能的软件程序`的任务。

## 前端项目的内容？

  我们先前写的`jsDemo`也是一个`用前端技术实现的带有功能的软件程序`。那么，它也应该是一个项目。这是正确的。

  但是，`jsDemo`这种项目只解决非常基础的问题。它的内容跟一般而言的项目相比，是有差距的。  
  
  简单地说，企业级的前端项目至少有以下几个内容：  

  1. `架构设计`。包括但不限于:
     1. **技术选型**。选择开发模式如`MVVM, MVC/MTC`，开发框架（主要是`UI`框架，本质是别人已经写好的解决UI问题的项目），通常开发框架选定了，开发模式也被动地由开发框架决定了。目前主流的UI框架都是`MVVM`的开发模式；
     2. **结构设计**。代码可以分为几个部分，各部分之间是什么关系；
     3. **安全设计**。不展开；  

  2. `开发工具`。包括但不限于:
     1. **版本控制工具**如[Git](../../../basic/tool/git.md)。我们用过的，用以支撑团队协作开发。
     2. **脚手架工具**如[Vite](https://vitejs.dev)。用以快速初始化项目；
     3. **依赖管理工具**如[npm](../../../basic/env/Node.md#什么是依赖包管理器-它有什么用)。我们在`node`的部分介绍过，但你可能已经忘记了，它用来为我们的项目添加开源社区中别人写好的代码。
     4. 第三方的**开源代码**。就是别人写好的项目，借助这些第三方的项目代码，我们得以更快地实现自己的功能需求。
     5. **构建工具**。将写好的代码进行二次加工，加工后的代码才是我们的最终成品。  

  3. **质量保障工具**。借助质保工具，我们可以对代码进行测试，一旦测试出了问题就更改代码，减少代码中的错误和缺陷，从而保证项目质量。

  请注意`开发工具`中的`脚手架工具`，上面对它的解释是——快速初始化项目。  
  > 什么是快速初始化项目？  

  以`Vite`为例。当我们跑终端命令去创建`Vite`时，它会询问你选择是否为你的项目添加如下内容：

  ```bash
  $ npm create vite #执行创建Vite命令

  #我们便会点菜般地配置项目
  ? Project name: #输入我们的项目名称

  ? Select a framework: #选择我们的UI框架
    > Vanilla #无ui框架，原生js
      Vue #Vite团队的主UI框架
      React #当前最热门框架
      Preact #React迷你精华版
      Lit #没用过
      Svelte #超新星
      Solid #超黑马
      Qwik #太新了没用过
      Others #其它

  ? Select a variant: #选择我们的代码要以什么方式被执行
    > TypeScript #ts与默认编译器
      TypeScript + SWC #ts和swc编译器(更快的编译器)
      JavaScript #js与默认编译器
      JavaScript + SWC #自行类比
  
  #完成上面的选择后，项目就初始化完成了，Vite会提示我们执行下方三行命令运行项目

  $ cd <刚刚创建的项目名字> #切换到刚刚创建出来的项目文件夹（因为我们是使用npm创建vite，该文件夹也默认完成了npm初始化）
  $ npm install #下载npm库中vite给我们搭配好的依赖包（轮子、第三方库）
  $ npm run dev #npm执行node的dev脚本，这个脚本会在dev（本地开发环境）运行我们的项目

  ```

## 快速上手

### 项目的基本内容

  接下来，我们会使用`Vite`项目初始化一个项目。
  我们对`Vite`的选择如下：

  ```bash
  ? Project name: vite-project

  ? Select a framework: React #我们将要学习的第一个框架

  ? Select a variant: JavaScript #暂时不使用TypeScript
  ```

  Select完成后，我们的项目结构将会变为如下（进入项目目录, 终端输入`tree /F /A`得到）：

  ```bash
  
  |   .eslintrc.cjs #代码格式化配置
  |   .gitignore #git相关配置
  |   index.html #主入口html文件
  |   package.json #npm配置
  |   README.md #项目默认说明文档
  |   vite.config.js #vite配置
  |
  +---public #资源文件夹
  |       vite.svg
  |
  \---src #项目主文件夹
      |   App.css  #React组件样式
      |   App.jsx #React组件
      |   index.css #全局css样式
      |   main.jsx #主jsx(实际是js)入口
      |
      \---assets #主资源文件夹
              react.svg
               
  ```

  这些文件可以按照功能进行基础的划分：
  
  ::: code-group

  ```bash [① 配置相关]
  # 统筹项目。决定其要如何进行开发，如何被加工，如何运行
  |   .eslintrc.cjs #代码格式化配置
  |   .gitignore #git相关配置
  |   index.html #主入口html文件 （虽然不是配置文件，但可以理解成项目的前端入口配置）
  |   package.json #npm配置
  |   README.md #项目默认说明文档
  |   vite.config.js #vite配置
  ```

  ```bash [② 核心代码]
  # 核心代码
  \---src #项目主文件夹
      | ...略
  ```

  ```bash [③ 资源文件]
  # 在js或者html中，我们可能使用到的视频、图片甚至文本
  +---public #资源文件夹
  |
  \---src #项目主文件夹
      | ...略
      \---assets #主资源文件夹
  ```

  :::

  好了。现在，为了搞清楚这些文件的来龙去脉，我们要舍弃`Vite`这种脚手架工具，从零进行上述项目的搭建。

### 手动初始化一个Vite模板项目

  实际上，在上面的流程里，`Vite`的行为等效于我们手动去创建下面的内容： 

  1. 创建一个项目名文件夹

  ```bash
  +--- vite-project
  ```

  2. 使用npm初始化该文件夹
  ::: code-group

  ```bash [① 终端运行npm初始化命令]  
  $ npm init
  ```

  ```bash [② 结果]
  |   package.json #生成npm配置文件
  |
  +--- vite-project
  ```

  :::
  
  3. 在npm的配置文件`package.json`中，配置依赖库——（vite,react, eslint等)，再根据依赖库配置执行脚本如（dev, build, lint等）

  ```json [package.json]
  {
    "name": "vite-project",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
      "preview": "vite preview"
    },
    "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
    },
    "devDependencies": {
      "@types/react": "^18.2.56",
      "@types/react-dom": "^18.2.19",
      "@vitejs/plugin-react": "^4.2.1",
      "eslint": "^8.56.0",
      "eslint-plugin-react": "^7.33.2",
      "eslint-plugin-react-hooks": "^4.6.0",
      "eslint-plugin-react-refresh": "^0.4.5",
      "vite": "^5.1.4"
    }
  }
  ```
  
  4. 除npm外其它工具的配置
  ::: code-group
  ``` js [① vite配置]
  // vite.config.js
  import { defineConfig } from 'vite' // 引入vite官方的配置函数
  import react from '@vitejs/plugin-react' // 引入vite官方的react配置插件

  // 参考vite官网的配置要求
  export default defineConfig({
    plugins: [react()],
  })
  ```  
    
  ``` bash [② git的过滤配置]
  # .gitignore 使用正则规则设定哪些文件不被git跟踪记录
  # Logs 下面这些log内容不跟踪
  logs
  *.log
  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*
  pnpm-debug.log*
  lerna-debug.log*

  node_modules #npm包不跟踪
  dist #打包后的文件夹不跟踪
  dist-ssr #打包后的ssr文件夹不跟踪
  *.local #所有以.local结尾的文件不跟踪，下面的类似，自行推断

  # Editor directories and files
  .vscode/*
  !.vscode/extensions.json
  .idea
  .DS_Store
  *.suo
  *.ntvs*
  *.njsproj
  *.sln
  *.sw?
  ```

  ``` js [③ 代码格式化配置]
  // .eslintrc.cjs。实际上是js文件，node在某些情况下需要部分js文件后缀改为cjs以便于它自身的工作
  
  // 参考eslint官网配置，下面这些我都不记得对应些啥了——这意味着不重要
  module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }

  ```
  :::

  5. 创建项目文件夹结构
  ``` bash
  |   index.html #主入口html文件
  |   README.md #项目默认说明文档
  |
  +---public #资源文件夹
  |
  \---src #项目主文件夹
      |   index.css #全局css样式
      |   main.jsx #主jsx(实际是js)入口
      |
      \---assets #主资源文件夹
  ```

  6. 前端三剑客登场
  ::: code-group
  ``` html [① 编写React项目的index.html]
  <!-- index.html -->
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vite + React</title>
    </head>
    <body>
      <div id="root"></div> <!-- 唯一的dom供React表演 -->
      <script type="module" src="/src/main.jsx"></script> <!-- React：有我在，请使用jsx替换js, 同时指定js代码组织方式为es6的module -->
    </body>
  </html>
  ```
  
  ``` jsx [② js -> jsx(main.jsx)]
  import React from 'react' // react库的主类
  import ReactDOM from 'react-dom/client' // react-dom库的ReactDom类

  /**
   * 引入我们自己写好的react组件 -- App.jsx 
   * 当然，因为我们是手动创建而不是vite自动生成，此时，这个App.jsx还不存在

   */
  import App from './App.jsx' 
  import './index.css' // 在jsx中引入css

  // 将react组件渲染到html中唯一的dom中
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  ```
  ``` txt [③ 编写主css - index.css]
  css不展开
  ```
  :::

  7. 组件化开发
    
  打住。组件化开发是一种开发思想，我们先来看看为什么要有组件化开发？
  

## 组件化开发？？

### 什么是组件化开发？
  我们先前实现的`jsDemo`中，往往是一套`html/js/css`实现整个项目。这在demo内容里没什么问题，但如果，我们要实现复杂项目，这种方式就是折磨自己了。  
    
  于是，在web开发历史中，出现了`组件化`的思想。简单来说，我们把搭建整个项目理解成搭积木，我们可以把整个项目分解成一块一块的`组件`积木，每个`组件`都有它自身完整的内容，所有组件的`有序排列`构成了整个项目的内容。

  在非组件化的模式中，往往是一步错步步错，牵一发而动全身，开发与维护压力山大。  
  通过组件化，项目P被拆解为几个子部分。例如，`P = a + b`。`a`与`b`的内容是隔离开来的，如果`a`出了问题，我们只需要在整个项目中更换掉`a`这块积木便可以完成修复。这是更合理的开发思想。

### 如何在项目中进行组件化开发？
  
  现在进行这个思考还为时尚早。实际上，当我们使用主流的`UI框架`，如本节的`React`进行开发时，使用的就是组件化开发。这个问题不妨留给我们自己——`React`是如何实现组件化的开发的？


## 后续

  趁热打铁。我们直接开始[React](./framework/react/index.md)的内容。
