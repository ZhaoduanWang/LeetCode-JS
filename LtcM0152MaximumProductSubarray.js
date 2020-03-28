var maxProduct = function(nums){
    var dp = Array(nums.length);
    let max;
    dp[0] = max = nums[0];    

    for (i=1; i<nums.length; i++) {
        dp[i] = Math.max(nums[i], (dp[i-1]*nums[i]));
        dp[i]>max ? max = dp[i] : max;
    }

    return max;
};

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));