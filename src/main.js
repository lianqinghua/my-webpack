import $ from 'jquery'
import './css/style.scss'
$('#app').text(3);


//es6 class
// 使用 class 定义的 ，叫做类
class Per {
  // constructor 是构造函数的意思
  // 每当 new Per() 的时候，必然会优先调用 Per 上的  constructor
  constructor(name, age) {
    console.log('ok')
    this.name = name
    this.age = age
  }

  // static 是关键字，专门用来创建静态属性的
  static info = '这是使用class关键字定义的类'

  // 静态方法：
  static show() {
    console.log('这是静态的show方法')
  }

  // 实例方法
  showName() {
    console.log('我是' + this.name)
  }
}

//var p2 = new Per('ls', 13)
// console.log(p2.name)// 实例属性【通过类的实例，点出来的属性】
// console.log(Per.info) // 静态属性【通过类直接点出来的属性】
// 调用静态方法
// Per.show()

// console.log(p2)
//p2.showName();

//继承
class myapp extends Per {
  constructor(name, age, password) {

    console.log('a')
    //运行父类的构造函数
    super(name, age)
    console.log('b')
    this.password = password
  }
}
let p1 = new myapp(1, 2, 3);
console.log(p1);


//fetch 发ajax请求
fetch('http://localhost:5000/')
  //中间值
  .then((res) => {
    return res.json();
  })
  //结果
  .then(result => {
    console.log(result);
  });