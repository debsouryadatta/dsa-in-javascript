const makeBeautiful = (s)=> {
    let stack = [s[0]];
    let count = 0;
    for(let i=1; i<s.length; i++){
        if(stack.at(-1) == "0" && s[i] == "1" || stack.at(-1) == "1" && s[i] == "0"){
            stack.push(s[i]);
            // console.log("if 1");
        } else if(stack.at(-1) == "0" && s[i] == "0"){
            s[i] = "1";
            stack.push("1");
            count++;
            // console.log("if 2");
        } else if(stack.at(-1) == "1" && s[i] == "1"){
            s[i] = "0";
            stack.push("0");
            count++;
            // console.log("if 3");
        }
        // console.log(i,count);
    }
    console.log(count);
}

makeBeautiful("01011")