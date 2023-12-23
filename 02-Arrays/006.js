
// Best Time to Buy and Sell Stock - Brute force
var maxProfit = function(prices) {
    let max=Number.MIN_SAFE_INTEGER;
    if(prices.length===1) return 0;
    for(let i=0;i<prices.length-1;i++){
        for(let j=i+1;j<prices.length;j++){
            let diff=prices[j]-prices[i];
            if(diff>max) max=diff;
        }
    }
    if(max<=0) return 0;
    return max;
};


// Best Time to Buy and Sell Stock - Optimal
var maxProfit = function(prices) {
    let min=Number.MAX_SAFE_INTEGER;
    let maxPro=0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]<min){
            min=prices[i];
        } 
        if(prices[i]-min>maxPro){
            maxPro=prices[i]-min;
        } 
    }
    return maxPro;
}