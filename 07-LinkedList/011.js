class Node{
    constructor(data){
        this.val = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtHead(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insertAt(index, data){
        if(index == 0){
            this.insertAtHead(data);
            this.size++;
            return;
        }
        let temp = this.head;
        for(let i=0; i<index-1; i++){
            temp = temp.next;
        }
        let newNode = new Node(data);
        newNode.next = temp.next;
        temp.next = newNode;
        this.size++;
    }

    print(){
        let result = ""
        let temp = this.head;
        while (temp) {
            result += `${temp.val}->`
            temp = temp.next;
        }
        return result;
    }

    removeAtHead(){
        if(!this.head) return null;
        this.head = this.head.next;
        this.size--;
    }

    removeElement(index){
        if(!this.head){
            this.size--;
            return null;
        }
        let temp = this.head;
        for(let i=0; i<index-1; i++){
            temp = temp.next;
        }
        temp.next = temp.next.next;
        this.size--;
        return;
    }

    searchElement(data){
        let curr = this.head;
        let index = 0;
        while(curr){
            if(curr.val == data){
                console.log(index);
                return index;
            }
            index++;
            curr = curr.next;
        }
    }

    middleNode(){
        if(!this.head || !this.head.next) return this.head;
        let fast = this.head;
        let slow = this.head;
        while(fast.next && fast.next.next){
            fast = fast.next.next;
            slow = slow.next;
        }
        console.log(slow.val);
        return slow.val;
    }

    reverse(){
        let prev = null, curr = this.head;
        let temp = null;
        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        this.head = prev;
        console.log(this.head.val);
        return this.head;
    }

    isCycle(){
        let fast = this.head, slow = this.head;
        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
            if(fast == slow) return true;
        }
        return false;
    }

    isEmpty(){
        return this.size === 0;
    }

    
}

let list = new LinkedList();
list.insertAt(0,100);
list.insertAt(1,200);
list.insertAt(2,300);
console.log(list.print());
list.insertAt(2,400);
console.log(list.print());
// list.removeElement(3);
// console.log(list.print());
list.searchElement(400)
list.middleNode();
list.reverse();
console.log(list.print());
console.log(list.isCycle());



// if(!this.head){
//     let node = new Node(data);
//     this.head = node;
//     this.size++;
// }else if(this.size > 1){
//     let temp = this.head.next;
//     let node = new Node(data);
//     this.head.next = node;
//     node.next = temp;
//     this.size++;
// }else if(this.size = 1){
//     let node = new Node(data);
//     this.head.next = node;
// }