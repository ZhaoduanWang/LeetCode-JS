var wordBreak = function(s, wordDict) {
    if (s.length===0) return true;

    for (let i=1; i<s.length+1; i++)
        substr = s.slice(0,i);
        if ( (wordDict[substr]) && (wordBreak(s.slice(i, s.length+1), wordDict)) )
            return true;
    
    return false;
}

wD = { 
        "leet":true,
        "code":true
     };

console.log(wordBreak("leetcode", wD));