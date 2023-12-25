/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let recur = (s,start,end)=> {
    if(start>=end){
        return ;
    }

    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;

    return recur(s,start+1,end-1);
}

var reverseString = function(s) {
    return recur(s,0,s.length-1);
};