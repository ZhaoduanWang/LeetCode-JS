var minPathSum = function(grid){
    let m = grid.length;
    let n = grid[0].length;

    console.log(m, n);

    var dp = Array(m);
    for (let i=0; i<m; i++){
        dp[i] = Array(n);
        for (let j=0; j<n; j++){
            dp[i][j] = grid[i][j];
        }
    }

    for (let i=0; i<m; i++){
        for (let j=0; j<n; j++){
            if ( (i===0) && (j===0) ) dp[i][j]=grid[i][j];
            else if(i===0) dp[i][j] = grid[i][j] + dp[i][j-1];
            else if(j===0) dp[i][j] = grid[i][j] + dp[i-1][j];
            else dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + dp[i][j];
        }
    }
    
    console.log(dp);
    //console.log(dp[m-1][n-1]);
    return dp[m-1][n-1];
}

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
]))