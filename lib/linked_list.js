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
        if (this.head === null && this.tail === null) {
           const newValue = new Node(val);
           this.tail = newValue;
           this.head = newValue; 
        } else {
            const newTail = new Node(val);
            this.tail.next = newTail;
            this.tail = newTail;
        }

        this.length++
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.head === null && this.tail === null) {
            return undefined;
        } else if (this.tail === this.head) {
            this.tail = null;
            this.head = null;
            this.length--;
        } else {
            const tail =  this.tail;
            let node = this.head;
            while (node.next !== this.tail) {
                node = node.next;
            }
            node.next = null;
            this.tail = node;
            this.length--;
            return tail;
        }
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

        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.head === null && this.tail === null) {
            return undefined;
        } else if (this.tail === this.head) {
            this.tail = null;
            this.head = null;
            this.length--;
        } else {
            const head = this.head;
            this.head = this.head.next;
            this.length--;
            return head;
        }
    }

    // TODO: Implement the contains method here
    contains(target) {

        let node = this.head;
        while (node.value !== target && node !== this.tail) {
            node = node.next;
        }
        return (node.value === target);
    }

    // TODO: Implement the get method here
    get(index) {
        if (index > this.length-1) {
            return null;
        } else {
            let node = this.head;
            let count = 0;
            while (count < index) {
                node = node.next;
                count++;
            }
            return node;
        }
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (index > this.length-1) {
            return false;
        } else {
            let node = this.head;
            let count = 0;
            while (count < index) {
                node = node.next
                count++
            }
            node.value = val;
            return true;
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        let newValue = new Node(val);
        if (index > this.length - 1) {
            return false;
        } else {
            let node = this.head;
            let count = 0;
            while (count < index-1) {
                node = node.next
                count++
            }
            newValue.next = node.next
            node.next = newValue;
            this.length++;
            return true;
        }
    }
    
    // [a] => [b] => [c] => [d] => [e] //  value.next = c.next c.next = value

    // TODO: Implement the remove method here
    remove(index) {
        if (index > this.length - 1) {
            return undefined;
        } else {
            let node = this.head;
            let count = 0;
            while (count < index -1) {
                node = node.next
                count++
            }
            const nodeNext = node.next
            node.next = node.next.next
            this.length--;
            return nodeNext;
        }
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
