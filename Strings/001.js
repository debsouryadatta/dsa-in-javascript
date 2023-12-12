var strStr = function(a, b) {
    for(let i=0;i<=a.length-b.length;i++){
        if(a[i] ==b[0]){
            let m=i;
            for(let j=0;j<b.length;j++){
                if(a[m]!=b[j]){
                    break;
                }
                m++;
                if(j==b.length-1){
                    return i;
                }
            }
        }
    }
    return -1
};

console.log(strStr("sadbutsad", "sad"));