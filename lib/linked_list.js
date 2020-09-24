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
        this.length = 0
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        if (this.head === null && this.tail === null) {
           const newValue = new Node(val);
           this.tail = newValue;
           this.head = newValue; 
        } else {
            const newTail = new Node(val);
            this.tail.next = newTail
            this.tail = newTail
        }

        this.length++
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        if (this.head === null && this.tail === null) {
            const newValue = new Node(val);
            this.tail = newValue;
            this.head = newValue;
        } else {
            const newHead = new Node(val);
            newHead.next = this.head;
            this.head = newHead;
        }

        this.length++
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {

    }

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
