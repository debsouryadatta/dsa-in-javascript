let recur = (fullNum,num,count)=> {
    if(num===0){
        return count;
    }

    // console.log(num);
    let digit = Math.floor(num % 10);
    if(Math.floor(fullNum%digit) === 0){
        // console.log(digit);
        count++;
    }
    return recur(fullNum,Math.floor(num/10),count)
}


var countDigits = function(num) {
    let count = 0;
    return recur(num,num,count)
};

console.log(countDigits(7));