// Circular Queue implementation using Linkedlist

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











// Circular Queue implementation using Arrays
class MyCircularQueue{
    constructor(k){
        this.queue = new Array(k);
        this.maxSize = k;
        this.currSize = 0;
        this.head = -1;
        this.tail = -1;
    }

    enQueue(data){
        if(this.currSize<this.maxSize){
            if(this.tail<this.maxSize-1){
                this.tail++;
            } else{
                this.tail=0;
            }
            this.queue[this.tail] = data;
            this.currSize++;
            console.log(this.currSize);
            if(this.head === -1){
                this.head = this.tail;
            }
            return true;
        } else{
            return false;
        }
    }

    deQueue(){
        if(this.isEmpty()){
            this.head = -1;
            this.tail = -1;
            return false
        }
        this.queue[this.head] = null;
        if(this.head<this.maxSize-1){
            this.head++;
        } else{
            this.head = 0;
        }
        this.currSize--;
        return true;
    }

    Front(){
        console.log(this.queue[this.head]);
        return this.isEmpty() ? -1 : this.queue[this.head];
    }

    Rear(){
        return this.isEmpty() ? -1 : this.queue[this.tail];
    }

    isEmpty(){
        return this.currSize === 0;
    }

    isFull(){
        return this.currSize === this.maxSize;
    }
}