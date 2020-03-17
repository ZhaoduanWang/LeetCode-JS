var isAnagram = function(s, t) {
    let patMap1 = {}, patMap2 = {};
    for (let c of s) patMap1[c] = patMap1[c]+1 || 1;
    for (let c of t) patMap2[c] = patMap2[c]+1 || 1;

    for (let k in patMap1)
        if (patMap1[k]!=patMap2[k]) return false;
    for (let k in patMap2)
        if (patMap2[k]!=patMap1[k]) return false;

    return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));