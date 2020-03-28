var minimumTotal = function(triangle) {
    var dp = [];
    let num,l,r;
    let min;
    
    num = triangle[0][0];
    dp.push(num);

    for (let i=1; i<4/*triangle.length*/; i++)
        for (let j=0; j<triangle[i].length; j++){
            num = triangle[i][j];
            if (j===0){
                num += dp[0];
                dp.push(num);
            }else if (j<triangle[i].length-1) {
                l = num + dp[0];
                r = num + dp[1];
                dp.push(Math.min(l,r));
                dp.shift();
            }else if (j===triangle[i].length-1){
                num += dp[0];
                dp.push(num);
                dp.shift();
            }
        }
    console.log(dp);

    min = dp[0];
    for (i=1; i<dp.length; i++)
        min = Math.min(min, dp[i]);
    return min;
}

console.log(minimumTotal(
    [
            [2],
           [3,4],
          [6,5,7],
         [4,1,8,3]
    ]
));