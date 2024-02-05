/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for(let i=0; i<tokens.length; i++){
        if(tokens[i]!="+" && tokens[i]!="-" && tokens[i]!="*" && tokens[i]!="/"){
            stack.push(tokens[i]);
        } else {
            let b = Number(stack.pop());
            let a = Number(stack.pop());
            if(tokens[i]=="+") stack.push(Math.floor(a+b));
            if(tokens[i]=="-") stack.push(Math.floor(a-b));
            if(tokens[i]=="*") stack.push(Math.floor(a*b));
            if(tokens[i]=="/") stack.push(Math.trunc(a/b));
            console.log(a);
            console.log(b);
            console.log(stack);
        }
    }
    return stack[0];
};