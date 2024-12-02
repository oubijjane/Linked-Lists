class LinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
  }
  append(value) {
    if (this.head.getValue() === null) {
      this.head.setValue(value);
      this.tail.setValue(value);
    } else if (this.tail.getValue() === null) {
      this.tail.setValue(value);
    } else {
      let newNode = new Node();
      newNode.setValue(value);
      this.tail.setNextNode(value);
      this.tail = newNode;
    }
  }
  prepend(value) {
    if (this.head === null) {
      this.head.setValue(value);
      this.tail.setValue(value);
    } else {
      let newNode = new Node();
      newNode.setValue(value);
      newNode.setNextNode(this.head);
      this.head = newNode;
    }
  }
  getHead() {
    return this.head.getValue();
  }
  getTail() {
    return this.tail.getValue();
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
  getValue() {
    return this.value;
  }
  setValue(value) {
    this.value = value;
  }

  getNextNode() {
    return this.nextNode;
  }
  setNextNode(nextNode) {
    this.nextNode = nextNode;
  }
  
}

export { LinkedList };
