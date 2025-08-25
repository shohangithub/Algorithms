//node model class
class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // print the list
  print() {
    if (this.head == null) {
      console.log("Linked List is empty");
      return;
    }

    let current = this.head;
    let llStr = "";

    while (current) {
      llStr += current.data + "-->";
      current = current.next;
    }

    console.log(llStr);
    console.log(this.head);
  }

  //get list size
  getSize() {
    let count = 0;
    let current = this.head;
    while (current) {
      count += 1;
      current = current.next;
    }
    return count;
  }

  //insert data on the begining
  insertAtBegin(data) {
    let node = new Node(data, this.head);

    this.head = node;
    //console.log(this.head)
  }

  // insert at the end node
  insertAtEnd(data) {
    if (this.head == null) {
      this.head = new Node(data, null);
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = new Node(data, null);
  }

  // insert at the target node
  insertAtIndex(data, index) {
    if (index < 0 || index > this.getSize()) {
      console.log("Invalid input index.");
      return;
    }

    if (index == 0) {
      this.insertAtBegin(data);
      return;
    }

    let count = 0;
    let current = this.head;
    while (current) {
      if (count == index - 1) {
        current.next = new Node(data, current.next);
        break;
      }
      count += 1;
      current = current.next;
    }
  }

  // insert after the target value
  insertAfterValue(targetValue, insertValue) {
    let current = this.head;
    while (current) {
      if (current.data == targetValue) {
        current.next = new Node(insertValue, current.next);
        break;
      }
      current = current.next;
    }
  }

  //insert values into linked list
  insertValues(data) {
    data.forEach((element) => {
      this.insertAtEnd(element);
    });
  }

  // remove the target node
  removeFromIndex(index) {
    if (index < 0 || index > this.getSize()) {
      console.log("Invalid input index.");
      return;
    }

    if (index == 0) {
      this.head = this.head.next;
      return;
    }

    let count = 0;
    let current = this.head;
    while (current) {
      if (count == index - 1) {
        current.next = current.next.next;
        break;
      }
      count += 1;
      current = current.next;
    }
  }

  // remove the target value
  removeByValue(targetValue) {
    let current = this.head;
    while (current) {
      if (current.value == targetValue) {
        current.next = current.next.next;
        break;
      }
      current = current.next;
    }
  }
}

//// calling

//import {LinkedList} from '/LinkedList/linked-list-basic.js'
let ll = new LinkedList();
ll.insertAtBegin(5);
ll.insertValues([77, 89, 55]);
ll.insertAtEnd(4);
ll.print();
// console.log(ll.getSize());
// ll.insertAtIndex(88, 2);
// ll.print();
// ll.removeFromIndex(1);
// ll.print();
// ll.insertAfterValue(89, 95);
// ll.print();
// ll.removeByValue(95);
// ll.print();
export { LinkedList };
