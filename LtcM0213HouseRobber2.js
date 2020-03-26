var rob2 = function(nums){
    robWithFirstHouse = [];
    robWithoutFirstHouse = [];

    for (let i=0; i<nums.length-1; i++) robWithFirstHouse.push(nums[i]);
    for (let i=1; i<nums.length; i++) robWithoutFirstHouse.push(nums[i]); 
    
    rt = Math.max( rob2Help(robWithFirstHouse), rob2Help(robWithoutFirstHouse) );        
    console.log(rt);

    function rob2Help(nums){
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
        
        return dp[nums.length-1];
    }
}

rob2([1,2,3,1]);