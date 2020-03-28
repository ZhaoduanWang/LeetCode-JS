var numTrees = function(n) {
    var dp = new Array(n+1);
    let rt = 0;

    for (let i=0; i<n+1; i++)
        dp[i] = 0;
    dp[0] = 1;
    dp[1] = 1;
    rt = numTreesHelper(n, dp);
    return rt;

    function numTreesHelper(n, dp)
    {
        if (dp[n]!=0) return dp[n];
        let total = 0;
        for (let i=0; i<n; i++)
            total += numTreesHelper(i, dp) * numTreesHelper(n-1-i, dp);
        
        dp[n] = total;
        return total;
    }
}

console.log(numTrees(3));