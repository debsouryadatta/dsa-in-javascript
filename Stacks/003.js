/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    if(s.length === 0 && t.length === 0){
        return true;
    }
    let stack1 = [];
    let stack2 = [];
    for(let i=0;i<s.length;i++){
        if(s[i]==="#"){
            if(stack1.length === 0){
                continue;
            } else{
                stack1.pop();
            }
        } else{
            stack1.push(s[i]);
        }
    }

    for(let i=0;i<t.length;i++){
        if(t[i]==="#"){
            if(stack2.length === 0){
                continue;
            } else{
                stack2.pop();
            }
        } else{
            stack2.push(t[i]);
        }
    }

    return stack1.join("") === stack2.join("");
};