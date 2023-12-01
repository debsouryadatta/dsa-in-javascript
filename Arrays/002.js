// Pascal's Triangle

const generateRows = (row)=>{
    let rowArr = [1];
    let ans=1;
    for(let i=1;i<row;i++){
        ans = ans*(row-i);
        ans = ans/i;
        rowArr.push(ans);
    }
    return rowArr;
}

var generate = function(numRows) {
    let arr = [];
   for(let i=1;i<=numRows;i++){
    arr.push(generateRows(i));
   }
   return arr;
};