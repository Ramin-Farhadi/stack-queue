class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peak() {
    console.log(this.top);
  }
  push(value) {
    const newNode = new Node(value);
    this.bottom = this.top;
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }
  pop() {
    this.top = this.bottom;
    if (this.length === 1) {
      this.bottom = null;
    } else {
      this.bottom = this.bottom.next;
    }
    this.length--;
  }
}

const myStack = new Stack();
myStack.push('ramin');
myStack.push('ali');
myStack.push('maria');
myStack.pop();
myStack.pop();
myStack.pop();
myStack.push('test');
console.log(myStack);
// myStack.peak();
