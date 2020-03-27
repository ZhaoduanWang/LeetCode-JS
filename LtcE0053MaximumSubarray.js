var maxSubArray = function(nums) {
    let dp = Array(nums.length);
    let max = nums[0];

    for (let i=0; i<nums.length; i++)
        dp[i] = nums[0];
    
    for (let i=1; i<nums.length; i++){
        dp[i] = Math.max(nums[i], dp[i-1]+nums[i]);
        dp[i] > max ? max=dp[i] : max;
    }
    console.log(dp);
    return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));