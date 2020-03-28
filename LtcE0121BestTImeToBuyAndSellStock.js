var maxProfit = function(prices) {
    let maxProfit = 0;
    let buy = prices[0];

    for (i=1; i<prices.length; i++) {
        if ( (prices[i]-buy) > 0 ) { 
            maxProfit = Math.max( (prices[i]-buy), maxProfit); 
        }
        else buy = prices[i];
    }
    return maxProfit;

}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));