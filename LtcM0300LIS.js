var lengthOfLIS = function(nums){
    var dp = new Array();

    for (let idx=0; idx<nums.length; idx++){
        dp[idx] = new Array();
    }
    dp[0].push(nums[0]);

    for (let i=1; i<nums.length; i++){
        for (let j=0; j<i; j++){
            if ( (nums[j]<nums[i]) && (dp[i].length<dp[j].length+1) ){
                process.stdout.write(`dp[${i}:${j}]:${dp[i]} `);
                dp[i] = dp[j];
                process.stdout.write(`dp[${i}:${j}]:${dp[i]}  `);
            }
        }
        dp[i].push(nums[i]);
        process.stdout.write(`DP[${i}] : ${dp[i]}\n`);
    }

    return dp;
}

console.log(lengthOfLIS([3,2,6,4,5,1]));