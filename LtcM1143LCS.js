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
            substr = dp[j] + text1[i];
            if ( lcsHelper(substr, text2) && (dp[i].length<substr.length) ){
                dp[i] = [];
                for ( k of substr)
                    dp[i].push(k);
            }
        }
    }
    
    function lcsHelper(substr, str){
        l = 0;
        for (i=0; i<substr.length; i++)
            for (j=0; j<str.length; j++)
                if (substr[i]===str[j])
            if (j===str.length) return false;
            else if (l>=j) return false;
            else l = j;

        return true;     
    }

    return dp;
}

console.log(longestCommonSubsequence("abcde", "ace"));
