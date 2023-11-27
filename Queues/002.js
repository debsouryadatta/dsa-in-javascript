// Circular Queue implementation using Linkedlist
// New Node should always be a const

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MyCircularQueue {
    constructor(k) {
        this.capacity = k;
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enQueue(data) {
        if(this.isFull()){
            return false;
        }

        const newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
        } else{
            this.tail.next = newNode;
        }
        
        this.tail = newNode;
        this.tail.next = this.head;
        this.size++;
        return true;
    }

    deQueue() {
        if(this.isEmpty()){
            return false;
        }

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else{
            this.head = this.head.next;
            this.tail.next = this.head;
        }

        this.size--;
        return true;
    }

    Front() {
        return this.isEmpty() ? -1 : this.head.data;
    }

    Rear() {
        return this.isEmpty() ? -1 : this.tail.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }
}