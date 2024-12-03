
  const listSize = function () {
  let i = 0;
  const getSize = () => i;
  const increaseSize = () => i++;
  return { getSize, increaseSize };
}; 

class LinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
   this.mySize = listSize();
  }
  append(value) {
    if (!this.head.getValue()) {
      this.head.setValue(value);
      this.tail = this.head;
    } else {
      let newNode = new Node();
      newNode.setValue(value);
      this.tail.setNextNode(newNode);
      this.tail = newNode;
    }
    this.mySize.increaseSize(); 
  }
  prepend(value) {
    if (!this.head.getValue()) {
      this.head.setValue(value);
      this.tail.setValue(value);
    } else {
      let newNode = new Node();
      newNode.setValue(value);
      newNode.setNextNode(this.head);
      this.head = newNode;
    }
    this.mySize.increaseSize();
  }
  getHead() {
    return this.head.getValue();
  }
  getTail() {
    return this.tail.getValue();
  }
  size() {
    
    return this.mySize.getSize();
  }

  at(index) {
    let temp = this.head;
    let i = 0;
    while (i => index) {
      if(index >= this.mySize.getSize() || index < 0) {
        return "not found";
      } 
      if (i === index) {
        return temp.getValue();
      }
      i++;
      temp = temp.getNextNode();
    }

    return "not found";
  }
  toString() {
    let temp = this.head;
    let toPrint = "node: ";
    while (temp !== null) {
      toPrint += "=> " + temp.getValue();

      console.log(temp);
      temp = temp.getNextNode();
    }
    return toPrint;
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
