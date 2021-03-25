class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('error');
    }
    }
  }
  const firstNode = new Node('I am an instance of a Node!');
  
  module.exports = Node;