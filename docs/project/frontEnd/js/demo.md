---
layout: doc
outline: deep
---

# JsDemo节

## 自学时间

  如果你已经完成了[FreeCodeCamp](https://www.freecodecamp.org/chinese/learn/javascript-algorithms-and-data-structures)中，`基础 JavaScript`以及`ES6`的相关内容。这代表着你已经和编程语言打了照面。

  但是，为了能够跟上Demo篇的编码，你仍然需要自学[现代JavaScript教程](https://zh.javascript.info/)中一些内容。包括：
  
  1. `JavaScript 基础知识`（复习），`Object（对象）：基础知识`（复习与自学），`类`（自学）， `原型，继承`(自学)、`模块`(复习)这五个小部分的内容。其中，大部分知识你在freeCodeCamp中都接触与运用过。请自学掌握，并且额外加上`类|原型|对象`这三部分与`面向对象思维`密切相关的知识。

  2. `过一下`第二部分-**浏览器：文档，事件，接口**的全部内容。这其实就是`html`, 不过不再是`.html`里的html，而是`.js`的html。`这是前端开发中最主要的一个对象`。

::: warning ⚠
  自学开始前，请选择你的精灵球。
  [AI助手](https://devv.ai/zh)
:::

## 测试一下

  请确认你能看懂如下内容：

- **简单数据和复杂数据**

  ```js
  // 用数组表示一个星期表, 我们可以直接这样
  let result_a = [1, 2, 3, 4, 5, 6, 7] // 表示周一到周七
  
  // 简单数据的情况
  let result_b = []
  for (let day = 1; day <= 7; day ++ ) {
    result_b.push(day)
  }
  console.log(result_b)
  /**
   * 输出：
   *  [1, 2, 3, 4, 5, 6, 7] 
   */

  // 复杂数据的情况
  let result_c = []
  let dayRecord = { day: undefined } // 用复杂对象的格式包裹一下day这个信息
  for (let current = 1; current <= 7; current ++ ) {
    dayRecord.day = current; // current作为当前record的值
    result_c.push(dayRecord)
  }
  console.log(result_c)
  /**
   * 输出：
   * [
   *  { day: 7 },
   *  { day: 7 },
   *  { day: 7 },
   *  { day: 7 },
   *  { day: 7 },
   *  { day: 7 },
   *  { day: 7 }
   * ]
   */
  ```

- **语法相关（this, 作用域，作用域链）**
  - `变量起作用的域`

  ```js
  // 全局作用域你懂了吗？ 不懂请问AI
  // 下面展示一些局部作用域（函数作用域，块级作用域）
  {
    // 这是一个块级作用域
  }

  if (true) {
    // 这也是一个块级作用域
  }

  let a = {
    // 这不是一个作用域
  }

  function b() {
    // 这是一个函数作用域
  }

  /**
   * 发现没有，可以编写表达式的地方就存在作用域
   * 因为作用域就是某个变量（数据）起作用的空间（不严格地说）
   */

  // 变量与作用域
  let obj = '第一个名为obj的变量'
  let obj = '第二个名为obj的变量' // 这会报错，一个作用域内不能有同名变量
  {
    let obj = '子作用域的obj变量' // 这不会有问题
    console.log(obj) // '子作用域的obj变量'
  }
  console.log(obj) // '第一个名为obj的变量'


  // this - 一个关键字，其值为作用域中的一个对象
  console.log(this)
  /**
   * 全局作用域中this是该js文件的调用者
   * 若js在浏览器环境中调用, this = window(一个浏览器相关对象)
   * 若js在node中调用, this = {}(一个空对象)
   */
  let a = 1;
  let b = 1;
  {
    let a = 2;
    // 子作用域的this, 通过作用域链继承自父作用域 
    console.log(this) // window
    // 子作用域的变量，优先使用自身，再使用作用域链继承
    console.log(a, b) 
    /**
     * Output: 2, 1;
     * a -> 2
     * b -> undefined -(作用域链) -> 1
     */
  }
  ```

  - **this的指向问题(普通函数，箭头函数)**

  ```js
  this.name = '全局this'

  let dog = { name: '狗' }
  let cat = { name: '猫' }

  // 声明一个普通函数
  function fn() {
    console.log(this.name) // 谁调用这个fn, this就是谁
  }
  this.fn() // 或者直接 fn()
  /**
  * 调用者： 全局this
  * output: '全局this'
  */

  dog.fn = fn // 给dog添加fn属性
  dog.fn()
  /**
  * 调用者： dog
  * output: '狗'
  */

  // 同理
  cat.fn = fn 
  cat.fn() // '猫'

  /**
  *  小偷方法：
  *  Function.prototype.call/bind/apply
  *  作用： 改变函数的调用者
  */

  cat.fn.call(dog) 
  this.fn.call(dog)
  /**
  * 用狗调用别人的fn方法
  * Ouput: '狗'
  */ 

  // 声明一个箭头函数
  const arrowFn = () => {
    // 箭头函数的this永远指向声明时作用域的this
    console.log(this.name) 
  }

  // arrowFn声明时，作用域是全局作用域
  this.fn2 = arrowFn
  this.fn2() // '全局this'
  dog.fn2 = arrowFn
  dog.fn2()  // '全局this'
  cat.fn2 = arrowFn
  cat.fn2()  // '全局this'

  this.fn2.call(dog) 
  /**
  * 小偷方法对箭头函数无效
  * 输出: 
  *  '全局this'
  */
  ```

- **js面向对象\[对象，类，原型，原型链\]**
  - **对象**
    - `具象的。作为个体的对象`

    ```js
    // 描述一下自己
    let zyzj = {
      id: 1,
      name: 'zhiyanzhaijie',
      age: 24,
    }
    // 描述一下另外一个人
    let chenlai = {
      id: 2,
      name: '陈来',
      age: 42
    }
    ```

  - **类，继承类**
    - `抽象的。作为普遍的类`

    ```js
    // 上面的两个人有相同的属性。我们可以说，这两个人都属于某一class（类）东西，姑且称作为Person, Person的内容就是它们相同的属性。 PS: 类的写法不只一种，这里只写最推荐的写法
    class Person {
      
      constructor($id, $name, $age) {
        /**
         * this   指代类，一旦被具象成个体，则指向个体
         */
        this.id = $id
        this.name = $name
        this.age = $age
      }

    }
    // 有了类我们就可以举一反三了。创建第三个人
    let zyzj = new Person(3, 'zyzj', 33)
    console.log(zyzj)
    /**
     * Person { 
     *   id: 3,
     *   name: 'zyzj',
     *   age: '33'
     * }
     */
    
    /**
     *  我现在觉得Person的内容不够多。比如，我想创建一个Coder类，
     *  这个类的内容就是在Person的内容上，多加了一个函数，所以我们可以这样写
     */ 
    class Coder extends Person {
      code() {
        console.log(`我今年${this.age}岁，有${this.age}年编程经验`)
      }
    }

    // 创建一个会code的zyzj
    let zyzj_code = new Coder(3, 'zyzj', 33)
    zyzj_code.code()
    /**
     *  输出：
     *    我今年33岁，有33年编程经验
     */
    ```

  - **原型和原型链**
    - `顺藤摸瓜的原型链`

    ```js
    let rabbit = {
      name: '兔子',
    }
    console.log(rabbit.run) // 输出： undefined
    Object.prototype.run = function() {
      console.log(this.name)
    }

    /**
     * 对任意 class A
     * 有默认规则: 
     *
     * A.prototype = { constructor: A }
     *
     * 当然，这个prototype属性的值是可以进行更改的（但不推荐）
     */

    rabbit.run()
    /**
     * rabbit没有run, rabbit没有run，但其原型链上游的Object.prototype有
     * 输出：   
     *    '兔子'
     */

    // 这里的原型链
    /**
     *  rabbit -(__proto__)-> Object.prototype
     * 
     *  Object.prototype -(__proto__)-> null(原型链顶点)
     */
    ```

- **Dom对象**
  - document

  ```js
  // dom操作的核心对象 - document
  console.dir(document)

  // 创建dom元素
  document.createElement('div')

  // 查找dom元素
  document.querySelector('#example')
  document.querySelectorAll()
  document.getElementById()

  // 打印dom对象上的方法
  let dom = document.querySelector("#example")
  console.dir(dom)

  // 事件监听
  dom.addEventListener('click', () => {
    console.log('被点击时做的事')
  })
  ```

## 开始
