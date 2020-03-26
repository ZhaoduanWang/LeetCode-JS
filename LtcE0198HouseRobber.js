var rob = function(nums){
    var dp = Array(nums.length);
    for (let i=0; i<nums.length; i++)
        dp[i] = 0;
    dp[0] = nums[0];
    
    for (let i=1; i<nums.length; i++)
        for (let j=0; j<i; j++)
            if (i>j+1) {
                dp[i] = Math.max( (dp[j]+nums[i]), dp[i] );
            } else { 
                // i = j+1
                dp[i] = Math.max( dp[i], dp[j], nums[i]);
            }
    
    //console.log(dp);
    return dp[nums.length-1];
}

rob([1,2,3,1]);
rob([2,7,9,3,1]);