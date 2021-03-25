class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
    getNextNode() {
      return this.next;
    }
  }
  const firstNode = new Node('I am an instance of a Node!');
  
  module.exports = Node;