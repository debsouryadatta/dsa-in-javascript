// let kThCharaterOfDecryptedString = (s, k)=> {
//     let arr = [];
//     let res = [];
//     for(let i=0; i<s.length; i++){
//         if(s.charCodeAt(i) >= 49 && s.charCodeAt(i) <= 57){
//             let t = arr.join("");
//             for(let j=1; j<= Number(s[i]); j++){
//                 res.push(t);
//             }
//             arr = [];
//         } else {
//             arr.push(s[i]);
//         }
//     }
//     res = res.join("");
//     console.log(res);
//     console.log(res[k+1]);
// }

// kThCharaterOfDecryptedString("ab12c3", 8);

let nextLargestPalindrome = (s, length)=> {
    let n = Number(s);
    let tar = Math.pow(10, length+1);
    for(let i=n+1; i<=tar; i++){
        let flag = false;
        let str = String(i);
        for(let j=0; j<str.length; j++){
            if(str[j] === str[str.length-j-1]){
                flag = true;
                console.log(str[j], str[str.length-j-1]);
            } else {
                flag = false;
                break;
            }
        }
        if(flag == true){
            console.log(i);
            return i;
        }
    }
}

nextLargestPalindrome(999, 3);