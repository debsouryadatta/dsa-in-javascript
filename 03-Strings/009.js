let kThCharaterOfDecryptedString = (s, k)=> {
    let arr = [];
    let res = [];
    for(let i=0; i<s.length; i++){
        if(s.charCodeAt(i) >= 49 && s.charCodeAt(i) <= 57){
            let t = arr.join("");
            for(let j=1; j<= Number(s[i]); j++){
                res.push(t);
            }
            arr = [];
        } else {
            arr.push(s[i]);
        }
    }
    res = res.join("");
    console.log(res);
    console.log(res[k+1]);
}

kThCharaterOfDecryptedString("ab12c3", 8);