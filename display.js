class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addFront = (value) => {
    newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      return this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    }
  };

  removeFront = () => {
    if (this.head != null) {
      this.head = newNode.next;
      return this.head;
    } else {
      this.head = null;
      return this.head;
    }
  };

  front = (value) => {
    newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      return this.head.data;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      return this.head.data;
    }
  };

  display = (node) => {
    this.head = node;

    while (this.head) {
      console.log(this.head.value.toString());

      this.head = this.head.next;
    }
  };
}
