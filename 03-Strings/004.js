// const reverseStringWordWise = (s)=> {
//     s = s.split(" ").reverse().join(" ");
//     return s;
// }


// Another approach
const reverseStringWordWise = (s)=> {
    let word="";
    let arr = [];
    for(let i=0; i< s.length; i++){
        if(i === s.length-1){
            word = word + s[i];
            arr.push(word);
            word="";
        } else if(s[i] != " "){
            word = word + s[i];
        } else{
            arr.push(word);
            word="";
        }
    }
    console.log(arr.reverse().join(" "));
}

reverseStringWordWise("Always indent your code")



