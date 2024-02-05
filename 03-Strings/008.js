const firstNonRepeatingCharacter = (s)=> {
    let myMap = new Map();
    for(let i=0; i<s.length; i++){
        if(myMap.has(s[i])){
            myMap.set(s[i], myMap.get(s[i])+1);
        } else {
            myMap.set(s[i], 1);
        }
    }
    let flag = false;
    for(const [key, value] of myMap){
        if(value == 1){
            console.log(key, s.indexOf(key));
            flag = true;
            return s.indexOf(key);
        }
    }
    if(flag == false) return -1;
}

firstNonRepeatingCharacter("leetcode");