class Animal {
  name 
  age
  color
  speed
  pre

  constructor(name, age, color, speed, pre) {
    this.name = name
    this.age = age
    this.color = color 
    this.speed = speed
    this.pre = pre
  }

  sayHello() {
    console.log(`${this.pre}, 我是${this.name}`)
  }

  run() {
    console.log(this.speed)
  }
}

// let dog = {
//   name: "小白",
//   age: 2,
//   color: "#fff",
//   speed: 40,
//   pre: '旺旺',
//   sayHello: () => {
//     console.log(`${this.pre}, 我是${this.name}`)
//   },
//   run: () => {
//     console.log(this.speed)
//   },
// }

let dog = new Animal('小白', 2, "#fff", 40, "汪汪")

// let cat = {
//   name: '小黑',
//   age: 5,
//   color: '#000',
//   speed: 60,
//   pre: '喵',
//   sayHello: () => {
//     console.log(`${this.pre}, 我是${this.name}`)
//   },
//   run: () => {
//     console.log(this.speed)
//   },
// }

let cat = new Animal('小黑', 5, "#000", 60, '喵')
