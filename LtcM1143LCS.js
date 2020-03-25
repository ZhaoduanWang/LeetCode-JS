var longestCommonSubsequence = function(text1, text2){
    var dp = {};
    let substr;

    for (let k=0; k<text1.length; k++){
        dp[k] = [];
    }
    if (text2.includes(text1[0]))
        dp[0] = [text1[0]];
    
    for (let i=1; i<text1.length; i++){
        for (let j=0; j<i; j++){
            if (dp[i].length<dp[j].length) {
                dp[i] = [];
                s = dp[j];
                for ( k of dp[j])
                    dp[i].push(k);
                process.stdout.write(`1[${i}:${j}] ${dp[i]}\n`);
            }
            substr = [];
            for (k of dp[j])
                substr.push(k);
            substr.push(text1[i]);
            //substr = dp[j] + text1[i];
            process.stdout.write(`2[${i}:${j}] ${substr}\n`);
            if ( lcsHelper(substr, text2) && (dp[i].length<substr.length) ){
                dp[i] = [];
                for ( k of substr)
                    dp[i].push(k);
                process.stdout.write(`3[${i}:${j}] ${dp[i]}\n`);
            }
        }
    }
    
    function lcsHelper(substr, str){
        l = -1;
        for (i=0; i<substr.length; i++) {
            for (j=0; j<str.length; j++)
                if ( (substr[i]===str[j]) && (j>l) ) { l = j; break; }
            if (j===str.length) return false;
            else if (l>j) return false;
        }

        return true;     
    }

    return dp;
}

console.log(longestCommonSubsequence("abcde", "ace"));
