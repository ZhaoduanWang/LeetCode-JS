var coinChange = function(coins, amount){
    dp = {};
    dp[0] = 0;
    for (let i=1; i<=amount; i++)
        dp[i] = amount+1;
        
    for (let i=1; i<=amount; i++){
        for (let j=0; j<coins.length; j++){
            if (coins[j]<=i )
                dp[i] = Math.min(dp[i], 1+dp[i-coins[j]]);
        }
    }
    return dp[amount];
}

console.log(coinChange([1,2,5], 11));