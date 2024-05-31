/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (let i = 0; i < words.length; i++) {
        let s = words[i];
        let flag = false;
        for (let j = 0; j < s.length; j++) {
            if (s[j] === s[s.length - j - 1]) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
        if (flag == true) {
            console.log(s);
            return s;
        }
    }
    return "";
};