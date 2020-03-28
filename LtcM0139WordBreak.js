var wordBreak = function(s, wordDict) {
    if (s.length===0) return true;

    for (let i=1; i<s.length+1; i++) {
        substr = s.slice(0,i);
        if ( (wordDict[substr]) && (wordBreak(s.slice(i, s.length+1), wordDict)) )
            return true;
    }

    return false;
}

wordDict = { 
        "leet":true,
        "code":true,
        "apple":true,
        "pen":true,
        "cats":true,
        "dog":true,
        "sand":true,
        "and":true,
        "cat":true
     };

console.log(wordBreak("leetcode", wordDict));
console.log(wordBreak("applepenapple", wordDict));
console.log(wordBreak("catsandog", wordDict));