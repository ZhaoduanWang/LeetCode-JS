var combinationSum4 = function(nums, target) {
    let dp = Array(target+1);
    dp[0] = 1;
    for (let i=1; i<dp.length; i++)
        dp[i] = 0;
    
    for (let i=1; i<target+1; i++){
        for (let j=0; j<nums.length; j++){
            num = nums[j];
            if (i>=num) dp[i]+=dp[i-num];
        }
    }
    return dp[target];
    //return dp;
}

console.log(combinationSum4([1,2,3], 4));