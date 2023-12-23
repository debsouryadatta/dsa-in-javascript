/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    if(s.length === 0){
        return "";
    }
    if(s.length === 1){
        return s;
    }
    let stack = [s[0]];
    for(let i=1;i<s.length;i++){
        if(s[i] !== stack.at(-1)){
            stack.push(s[i]);
        } else{
            stack.pop();
        }
    }
    return stack.join("");
};