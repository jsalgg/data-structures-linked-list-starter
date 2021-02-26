// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      let oldTail = this.tail;
      oldTail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (this.length === 0) return undefined;
    let oldTail = this.tail;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let nextVal = this.head;
      while (nextVal.next !== this.tail) {
        nextVal = nextVal.next;
      }
      nextVal.next = null;
      this.tail = nextVal;
    }

    this.length--;
    return oldTail;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    const newNode = new Node(val);
    //ref. head before reassignment
    if (this.length === 0) {
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      newNode.next = oldHead;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    let oldHead = this.head;
    if (this.length === 0) return undefined;
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    return oldHead;
  }
  tester() {
    return this;
  }
  // TODO: Implement the contains method here
  contains(target) {
    let nextVal = this.head;
    while (nextVal.next !== null) {
      if (nextVal.value === target) {
        return true;
      } else {
        nextVal = this.head.next;
      }
      return false;
    }
  }

  // TODO: Implement the get method here
  get(index) {}

  // TODO: Implement the set method here
  set(index, val) {}

  // TODO: Implement the insert method here
  insert(index, val) {}

  // TODO: Implement the remove method here
  remove(index) {}

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

let x = new LinkedList();
x.addToHead("A");
x.addToHead("B");
x.addToHead("C");
console.log(x.tester());
console.log(x.contains("A"));
console.log(x.contains("B"));

exports.Node = Node;
exports.LinkedList = LinkedList;
