class Stack {
  arr = [];

  peek() {
    console.log(this.arr[this.arr.length - 1]);
  }
  push(value) {
    this.arr.push(value);
  }
  pop() {
    this.arr.pop();
  }
  print() {
    return console.log(this.arr);
  }
}

const myStack = new Stack();

myStack.push('ramin');
myStack.push('alir');
myStack.push('samira');
myStack.push('maria');

myStack.peek();
myStack.pop();
myStack.pop();

myStack.print();
