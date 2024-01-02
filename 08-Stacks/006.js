// Implement Stack Using Array

class Stack{
    constructor(){
        this.stack = [];
    }

    push(element){
        return this.stack.push(element);
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack.at(-1);
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    size(){
        return this.stack.length;
    }
}

let stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1);