---
layout: doc
outline: deep
---
# Node.js

::: info 💡放在开头
  Node.js本身比较庞大，可以说成是跑在服务器的Javascript。它可以用来在非浏览器环境下执行js代码，在安装了Node环境的电脑上，js代码也可以作为服务端代码运行。  

  当前并不对服务端node.js的代码编写做介绍，而仅介绍如何配置Node环境使得可以直接在VS Code内嵌的终端中执行js代码。当后端开发教程跟进后，会补充对应的node内容。
:::

## Node.js概况

  [Node.js](https://nodejs.org/zh-cn)是*JavaScript在浏览器的成功*与*后端开发存在的新模型需求*背景下的产物。

  当时恰逢`Google公司`为浏览器开发了一门用以快速运行javascript代码的引擎--`V8引擎`。V8的诞生为JavaScript的性能提升做了很大贡献，一些大胆的开发者借此机会，将**V8内核抽离出来与js合并为一门服务端开发语言（后端语言），也就是我们的node**。

  如今，Node.js作为一门成熟的服务端运行时环境被广泛选择，用以构建现代Web应用和程序。

## 安装

::: warning 必读
  由于当前的前端开发基本离不开Node的支持，请仔细配置好Node环境以便后续的开发使用。
:::

  1. **官方直装**。
::: details 详情
  ~~进入官方下载链接[Node.js Download](https://nodejs.org/en/download)，选择对应平台的Stable稳定版本进行下载。~~  
  如果你采用了上面划线的方法，你会得到以下：

- 🔪 你的电脑上的某个位置被你安装了一个node.js版本。如果你下载的安装包足够新，它还会把[npm](./Node.md#什么是依赖包管理器-它有什么用)（Node Package Manager/依赖包管理器）一并配置到你的电脑上。
- ⛜  安装的同时默认在你电脑上开了一个全局文件夹，这个全局文件夹可以被node定位到，后续你会在node的世界中找到各色各样的车轱辘🛞（依赖包）————用来使你搭建在node环境的项目（好比🚗）可以`运行 / run / 跑起来`，这些轮子在最好的情况下，应该被存放到全局文件夹中。  
  
  然而，由于前端开发的项目中用到的🛞太多，每个轮子是认祖宗的，不是祖宗不干活，如果`node版本对不上，这个轮子就废了`。那么，假如全局文件夹下拥有大量的轮子，我们不希望由于node版本不兼容就扔掉大量车轮，该怎么做？答案是，`同时拥有多个版本的node环境`，轮子对不上🚗就多买一辆车。所以，社区诞生了解决多版本node环境搭建的方案--`node版本管理器`。
:::
  2. **尝试后选择放弃官方直装**。然后了解下面的node版本管理器。

## 什么是node版本管理器？它有什么用？怎么用？
  
  > node版本管理器是解决多版本node环境搭建的方案产物;它的作用是同时拥有多个node🚗。  

  目前社区中最流行的是`nvm`(Node Version Manager/版本管理器)。
  使用`nvm`的思路是：  
  > 安装nvm -> nvm安装任意node(v1/v2/v3...) -> nvm选择其一作为当前的node环境。

- **安装nvm**。
::: warning 必读
  macOS或linux平台下的安装方式，参见[nvm-sh](https://github.com/nvm-sh/nvm#installing-and-updating)
:::

::: code-group

```md [windows]
  下载链接Url: https://github.com/coreybutler/nvm-windows/releases
```

``` [macOS或linux]
  不做介绍，请自行阅读上述注意项。
```

:::
安装完后，打开终端`powershell`(如果你不知道如何打开，百度)，输入以下命令并回车，如果输出了版本信息则安装成功。

```powershell
  nvm -v
```

- **nvm管理node**。

```txt
// 命令一： 查看nvm可以安装的node版本
nvm list available

// 命令二： 安装其一（假定version为18.18.0）
nvm install 18.18.0

// 命令三： 检查当前被nvm管理的node
nvm list

// 命令四： 设置某个版本为环境(同样以18.18.0为例)
nvm use 18.18.0

```

::: details 可能会遇到的问题
  🐞 powershell中报错了。直接复制报错信息到浏览器查找。  
  🐌 nvm下载node太慢。自行了解一下[CDN加速](https://zhuanlan.zhihu.com/p/28940451)，然后浏览器搜索`nvm设置镜像`
:::

## 什么是依赖包管理器？它有什么用？
  >
  > node的依赖包管理器就是[npm](https://www.npmjs.com/)（Node Package Manager）。它有一个很大的仓库用来存放所有node使用者上传的代码。这些上传的代码由于满足一定的格式，可以直接被其它使用者下载到他们的电脑中并使用。如果把使用了依赖包的项目比作🚗，那么，依赖包就是让🚗动起来的轮子🛞（造轮子就是把你认真编写的代码贡献到公共社区的意思）。
  >
  **较新版本的node在安装时直接内置了npm**。所以，配置好node环境后就可以直接使用它的依赖包管理器了。

- **`npm`命令**。
  ::: code-group

    ```shell [执行脚本]
      npm run ...
    ```

    ```shell [安装、卸载依赖]
    npm install ... 
    npm uninstall ...
    ```

    ```shell [更多]
      参见官网
    ```

  :::
- **更好的轮子 pnpm？**  
  npm好用但也不是完美。在你学习开发一段时间后，假如node依赖包给你的硬盘带来了拥挤，不妨了解一下[pnpm](https://pnpm.io/zh/motivation)吧。

## 视频演示

  敬请期待。
