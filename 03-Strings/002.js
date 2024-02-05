/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    let arr = s.split(" ");
    arr = arr.filter(word=> word!=" " && word!="");
    console.log(arr);
    arr.reverse();
    s = arr.join(" ");
    return s;
};