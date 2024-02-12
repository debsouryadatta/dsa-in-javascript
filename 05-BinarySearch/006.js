/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let targetCode = target.charCodeAt(0);
    let ans = [];
    let start=0, end=letters.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(letters[mid].charCodeAt(0)>targetCode){
            ans.push(letters[mid]);
            end=mid-1;
        } else {
            start=mid+1;
        }
    }
    if(ans.length){
        return ans.at(-1);
    } else {
        return letters[0];
    }
};