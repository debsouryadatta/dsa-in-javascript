let recur = (start,end,s)=> {
    if(start === end){
        return true;
    }

    if(s[start] === s[end]){
        recur(start+1, end-1, s);
    } else {
        return false;
    }
}

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    recur(0,s.length-1,s);
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));