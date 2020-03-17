var longestPalindrome = function(s) {
    let res = '';
    let max = 0; 
    let substr = '';
    let revstr = '';


    for (l=0,r=1; r<s.length; r++){
        let lo = l;

        while(lo<r){
            revstr = '';            
            substr = s.substring(lo, r+1);
            for (c=r; c>=lo; c--) revstr+=s[c];
            //console.log(`${substr} ${revstr}`);
            if (substr===revstr) {
                
                if(max < r-lo+1) res = substr, max=res.length;
            }
            lo++;
        }
    }

    return res;
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));