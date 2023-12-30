/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let obj = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    let stack = [];
    for(let i=0;i<s.length;i++){
        if(obj.hasOwnProperty(s[i])){
            stack.push(s[i]);
        } else {
            if(obj[stack.at(-1)] == s[i]){
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length==0;  
};