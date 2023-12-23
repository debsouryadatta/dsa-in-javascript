let recur = (num,sum)=> {
    if(num===0){
        return sum;
    }

    sum = sum + Math.floor(num%10);
    console.log(sum);
    return recur(Math.floor(num/10),sum);
}

var sumOfDigits = function(num) {
    let sum = 0;
    return recur(num,sum);
};