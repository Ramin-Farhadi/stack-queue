class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first.value;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.last = newNode;
      this.first = newNode;
    } else {
      const holdingPointer = this.last;
      this.last = newNode;
      holdingPointer.next = this.last;
    }
    this.length++;
  }
  dequeue() {
    this.length--;
    if (this.length < 1) {
      this.first = this.last = null;
      this.length = 0;
    } else {
      this.first = this.first.next;
    }
  }
}

const myqueue = new Queue();
myqueue.enqueue('ramin');
myqueue.enqueue('ali');
myqueue.enqueue('sina');
myqueue.dequeue();
myqueue.dequeue();
myqueue.dequeue();
myqueue.dequeue();
myqueue.dequeue();

console.log(myqueue);
