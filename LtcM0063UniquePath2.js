var uniquePathsWithObstacles = function(obstacleGrid){
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    var dp = Array(m);
    for (let i=0; i<m; i++){
        dp[i] = Array(n);
        for (let j=0; j<n; j++){
            if ( ((i===0)||(j===0)) && (obstacleGrid[i][j]===0) )
                dp[i][j] = 1;
            else
                dp[i][j] = obstacleGrid[i][j];
        }
    }

    for (let i=1; i<m; i++){
        for (let j=1; j<n; j++){
            if (dp[i][j]!=1) dp[i][j]=dp[i-1][j]+dp[i][j-1];
            else dp[i][j]=0;
        }
    }
    
    //console.log(dp);
    //console.log(dp[m-1][n-1]);
    return dp[m-1][n-1];
}

console.log(uniquePathsWithObstacles([
    [0,0,0],
    [0,1,0],
    [0,0,0]
]));