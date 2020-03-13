
class Queue{
  constructor() {
    this.items = []
  }
  front() {
    //return the front item
    return this.items[0]
  }
  rear() {
    //return the rear item
    return this.items[this.items.length - 1]
  }
  enQueue(item) {
    //enter queue 
    this.items.push(item)
  }
  delQueue() {
    //out queue
    return this.items.shift()
  }
  isEmpty() {
    return this.items.length === 0
  }
  toString() {
    return this.items.join(' ')
  }
  size() {
    return this.items.length
  }
}
let q = new Queue()

// q.enQueue(1)
// q.enQueue(2)
// q.enQueue(3)
// q.enQueue(4)
// q.delQueue()
// console.log(q)

// 击鼓传花 
 