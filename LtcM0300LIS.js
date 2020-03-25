var lengthOfLIS = function(nums){
    var dp = new Array();

    for (let idx=0; idx<nums.length; idx++){
        dp[idx] = new Array();
    }
    dp[0].push(nums[0]);

    for (let i=1; i<nums.length; i++){
        for (let j=0; j<i; j++){
            //process.stdout.write(`dp[${i}:${j}]  `);
            if ( (nums[j]<nums[i]) && (dp[i].length<(dp[j].length+1)) ){
                //process.stdout.write(`${dp[i]}`);
                // Deep Copy
                dp[i] = [];
                for (k of dp[j])
                    dp[i].push(k);
                //process.stdout.write(`<=${dp[i]} `);
            }
        }
        dp[i].push(nums[i]);
        //for (let k=0; k<nums.length; k++)
        //    process.stdout.write(`DP[${k}]:${dp[k]} `);
        //process.stdout.write(`\n`);
    }

    return dp;
}

console.log(lengthOfLIS([3,2,6,4,5,1]));
console.log(lengthOfLIS([10,22,9,33,21,50,41,60]));