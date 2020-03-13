/* 
  FILO
  peek() 
  pop()
  push()
  size()
  toString()
*/

// ES6 class
class Stack{
  constructor() {
    this.items = []
    //构造器中定义的函数 每个实例对象都有 不在原型中 效率不高
    this.func = function push(params) {}
  }
  //这里直接是定义到原型上的
  push(item) {
    this.items.push(item)
  }
  pop() {
    this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  size() {
    return this.items.length
  }
  toString() {
    return this.items.join(' ')
  }
}
let s = new Stack()
s.push(1)
s.push(2)
console.log(s)

// function 
function _Stack() {
  this.items = []
  _Stack.prototype.push = (item) => {
    this.items.push(item)
  }

}
let _s = new _Stack()
_s.push(1)
console.log(_s);
