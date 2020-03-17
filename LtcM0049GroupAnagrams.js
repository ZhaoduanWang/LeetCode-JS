var groupAnagrams = function(strs) {
    sortStrs = [];
    chache = {};
    res = [];

    for (let str of strs) {
        let key = str.split('').sort().join('');
        (!chache[key]) ? chache[key] = [str] : chache[key].push(str);
    }

    for (k in chache)
        res.push(chache[k]);
    return res;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));