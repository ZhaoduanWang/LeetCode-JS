var numDecodings = function(s) {
    var dp = Array(s.length);
    for (let i=0; i<s.length; i++)
        dp[i] = 0;
    dp[0] = 1;
    let ch;
    
    for (let i=1; i<s.length; i++){
        ch = s[i-1]*10 + s[i];
        if( (ch<=26) && (ch>=10) )
            dp[i] = dp[i-1] + 2;
        else
            dp[i] = dp[i-1] + 1;
    }
    
    return dp[s.length-1];
}

console.log(numDecodings("226"));