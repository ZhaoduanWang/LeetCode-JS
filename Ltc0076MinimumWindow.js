var minWindow = function(s, t) {
    const patMap = {}, curMap = {};
    let lo=-1, hi=-1;
    let ch;

    for (i of t) patMap[i] = patMap[i]+1 | 1, curMap[i] = 0;
    
    
    for (let l=0,r=0; r<s.length; ++r){
        ch = s[r];
        if (t.includes(ch)) curMap[ch] = curMap[ch]+1 || 1;
        
        while(l<=r && isValid(patMap, curMap)){
            if(lo<0) lo=l, hi=r;
            else if(r-l<hi-lo) lo=l,hi=r;
            ch = s[l];
            if (t.includes(ch)) curMap[ch] = curMap[ch]-1;
            l++;
        }
    }
    
    function isValid(patMap, curMap){
        for (let key in patMap){
            if (curMap[key]<patMap[key]) return false;
        }
        return true;
    }
    return lo<0 ? "":s.substring(lo,hi+1);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("bba","ab"));