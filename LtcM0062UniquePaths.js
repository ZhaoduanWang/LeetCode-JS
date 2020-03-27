var uniquePaths = function(m, n){
    var dp = Array(n);
    for (let i=0; i<n; i++){
        dp[i] = Array(m);
        for (let j=0; j<m; j++){
            if ( (i===0)||(j===0) ) dp[i][j] = 1;
        }
    }

    for (let i=1; i<n; i++)
        for (let j=1; j<m; j++)
            dp[i][j] = dp[i-1][j] + dp[i][j-1];

    return dp[n-1][m-1];        
    //console.log(dp);
}

/*var uniquePaths = function(m, n) {
    let rt = 0;

    dp = Array(n.length);
    for (let i=0; i<n.length; i++)
        dp[i] = Array(m.length);
        for (let j=0; j<m.length-1; j++)
            dp[i][j] = -1;

    rt = 1 + pathsHelp(m-1, n) + pathsHelp(m, n-1);
    return rt;

    function pathsHelp(m, n)
    {
        if ( (m===1)||(n===1) ) return 0;
        return 1 + pathsHelp(m-1, n) + pathsHelp(m, n-1);
    }
};*/

console.log(uniquePaths(7,3));