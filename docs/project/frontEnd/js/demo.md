---
layout: doc
outline: deep
---

# JsDemo篇

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
    class Animal {
      constructor(name) {
        this.name = name;
      }
      eat() {
        console.log(this.name + 'eats')
      }
      speak() {
        console.log(this.name + ' makes a noise.');
      }
    }

    class Dog extends Animal {
      constructor(name, breed) {
        super(name);
        this.breed = breed;
      }
      speak() {
        console.log(this.name + ' barks.');
      }
    }

    var a = new Animal('狗')

    var b = new Dog('狗狗')

    console.log(Animal.prototype, a.__proto__)
    console.log(b.__proto__, Dog.prototype, Dog.__proto__)


    b.eat()
    ```
  
- **语法相关（作用域，作用域链）**
  - `代码起作用的域`

  ```js
  let a = 1;
  let b = 2;
  // let a = 2; 非法
  console.log(a);
  {
    let a = 2; // 不非法
    console.log(a, b);
  }

  function c() {
    console.log(a)
  }
  c() // 输出: 1

  ```

- **Dom对象**
  