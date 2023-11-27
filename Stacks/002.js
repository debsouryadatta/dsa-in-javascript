/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let obj = {
        "(":")",
        "{":"}",
        "[":"]"
    };
    let stack = [];
    for(let i=0; i<s.length; i++){
        if(obj.hasOwnProperty(s[i])){
            stack.push(s[i]);
        } else{
            if(stack.length === 0 || s[i] !== obj[stack.at(-1)]){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
};