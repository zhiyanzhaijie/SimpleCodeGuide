---
layout: doc
outline: deep
---
# Git入门

::: tip 前提条件

- 确保你的**网络流畅**访问当前文档。
- 已了解[VsCode](../IDE/vscode.md)和[Markdown](markdown.md)
- 自信。[自信者这里请](./git.md#git的使用大师)

:::

## Git概况

::: details 点了不后悔
[Git的背景故事](./git.md#git趣闻)我就放下面了。
:::

  [Git](https://git-scm.com/)是一个流行、免费开源的`版本控制`软件。
  什么是版本控制？我们可以从玩游戏的角度来理解`版本控制`。
  如果你曾经游玩过闯关类的单机游戏，那么你应该会经常接触到`存档`系统。
  
  > 某一天，平静的村庄闯进了大boss恶魔掳走了小红。为了救回你的青梅竹马小红，打败boss并摧毁它们的邪恶计划，你必须手持利剑分别通过
  >
  > 1. **丛林关**；
  > 2. **湖泊关**；
  > 3. **沼泽关**；
  > 4. **火山关**；
  >
  > 等关卡。在你闯关的途中，你会经常切换出游戏菜单进行`存档`。这样，一旦你由于打不过怪物死掉了，你可以选择任意的`存档`进行重来。有时，boss实在太难打了，你不得不把你的`存档`交给你哥哥或者你操作熟练的好基友。在`存档`的帮助下，你最终成为了拯救世界的英雄。

  代码开发和打游戏是很相似的。不同的是，平静的村庄变成了你所在的开发团队，大Boss被感化成了老板了，你的目的现在是完成良好的代码。
  而`版本控制`，就是你开发中的`存档`系统。

  假设你的项目是一个打造**屠龙宝刀**的程序。
  那么，你的开发关卡可以分为：

  1. **材料收集功能**；
  2. **熔铸功能**；
  3. **镶嵌功能**；
  4. **强化功能**；
  5. **挥舞屠龙刀功能**；
  
  如果没有`版本控制`，你的每次失误都可能造成从头再来。

  而且，团队的项目往往比个人的项目要复杂的多。打造**屠龙宝刀**的任务在团队环境中，可能是打造**四大神器**。
  具体是:  
  
  你负责`战士`神器 -- `屠龙宝刀`；  
  同事A负责`法师`神器 -- `麻痹戒指`;  
  同事B负责`坦克`神器 -- `盘古盾`;  
  同事C负责`射手`神器 -- `后羿弓`;  
  
  相当于每个人都有各自的`职业（分支）`。项目的完成，最终是每个不同的`职业(分支)`存档的完成。

  这就是`版本控制`在开发中的作用。而现在，在众多的版本控制软件中，`Git`是最主流的。

## 安装Git
  
- [Git官方下载源](https://git-scm.com/downloads)。

  请尝试自己动手安装。若`powershell`终端输入下方命令后返回版本号则代表安装成功。

  ``` powershell
  > git -v
  ```
  
## Git的使用大师

  > ❌ 不同于先前推荐的工具，我们推荐入手`Git`的方式不再是[官方文档(Git)](https://git-scm.com/docs)。
  
::: details 第一步
快速成为`Git使用大师`，请点击[Learn Git Branch](https://learngitbranching.js.org/?locale=zh_CN)--社区开源的Git可视化学习项目yyds(永远的神)。

入门者请一定独立完成整个闯关流程。如果你觉得十分吃力，可以稍微看一眼[Git分支学习陪玩](https://www.bilibili.com/video/BV1XB4y1o7gA/)。  
如果你独立完成了上述挑战，你对`Git`的认知已经超越市场上绝大部分的程序员了。接着，[第二步--练一下](git.md#练一下)
:::
  
## 练一下

  <br />

- **安装Git后，如何使用Git管理一个代码项目？**  
  
::: code-group

 ```powershell [① 终端打开你的项目根目录]
 > code [$你自己的项目根目录] #这里使用vscode的终端界面进行操作
 ```

 ```powershell [② 执行git的初始化命令]
 > git init #执行此命令后，git会在该目录安营扎寨，标志管理初始化完成
 ```

 ```powershell [③ 为git进行专门设置]
 # 设置git用户的信息 -- （你自己的信息，--local可省略）
 > git config --local user.name [$你的名字] 
 > git config --local user.email [$你的邮箱]

 # 或
 # 全局设置git用户信息(设置全局后，任何没有单独设置git信息的项目都会使用全局信息)
 > git config --global user.name [$你的名字]
 > git config --global user.email [$你的邮箱]

 # 配置git的网络代理（为了更流畅地使用，务必自备代理）
 > git config --global http.https://github.com.proxy socks5://127.0.0.1:[$你的代理端口]

 # （可选一）连接空的git远程仓库
 > git remote add origin [$远程仓库的网络地址] # 连接远程仓库
 > git remote -v # 查看远程仓库是否连接成功

 # （可选二）直接克隆已有的git远程仓库的代码到本地
 > git clone [$远程仓库的网络地址]
 #  或（可选二）只克隆已有仓库指定分支的代码到本地
 > git clone -b [$分支名]
 > git clone -b [$分支名] [$指定本地目录] # 多一个本地目录的指定，作用自己尝试
 ```

 ``` powershell [④ 连接git远程仓库]
 # 流行git远程库平台可选 Github，Gitlab，Gitee 这里以Github为例
 ```
  
:::
  <br />

- **如何使用Git的远程仓库？**  

> 一、寻找支持创建Git仓库的平台。  

这些平台有：[Github](https://github.com/), [Gitlab](https://about.gitlab.com/), [Gitee](https://gitee.com/)。其它的我也不知道了。  
我们选择大名鼎鼎的--`Github`  

> 二、在Github中创建一个库。  

::: details 大致步骤

1. 确保注册了`Github`的账号（作为一名开发者，Github是你最值得信赖的社区之一，请牢记你的账号就像qq或微信一样）
2. 找到`Github`官网中与创建代码库相关的功能 -- 当前为`create new repository`
3. 参照功能页提示创建你的第一个Git社区`远程代码仓库`。  
  
*以上步骤，也可以参照b站视频操作流程[Git开发模拟 - 工具篇](https://www.bilibili.com/video/BV1Uu4y1a7my/);*
:::

> 三、本地远程交互  

几乎全部交互功能，在[第一步](#git的使用大师)的游戏里已经被覆盖了。如果你对操作仍然有疑惑，建议你参照上述视频。

::: details 更好地进行仓库交互
当你尝试将代码上传至远程时，为了确认你的身份，需要你频繁地进行身份验证。  
  
如果你疲于重复地输入账户密码，请使用`ssh`密钥（参见GitHub文档——[通过 SSH 连接到 GitHub](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh)）将你的电脑与git任意平台进行绑定。在绑定之后，`ssh`作为你的钥匙，访问远程仓库就非常便捷啦。
  
当然，上述[视频](https://www.bilibili.com/video/BV1Uu4y1a7my/)中也实现了流程示例。

  ::: code-group

  ```powershell [① 生成ssh密钥]
  > ssh-keygen -t rsa -b 4096 -C "[$你注册的邮箱]"
  ```

  ```powershell [② 将ssh公钥信息添加到Github中]
  # 该命令进入密钥存放路径, ~是个路径别名，它指的是你当前Window系统用户的根目录
  > cd ~/.ssh 
  # 查看当前目录下的文件，公钥的内容存放在文件id_rsa.pub中
  > ls
  # 该命令获取id_rsa.pub的文本信息
  > cat id_rsa.pub
  # 复制公钥信息，在Github官网的个人设置中，找到SSH相关页面绑定window用户(见视频)
  
  ```

  :::

## Git趣闻

## Git和Git平台
