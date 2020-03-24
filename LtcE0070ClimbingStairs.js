cache = {};
var climbStairs = function(n){
    if (n===1) { cache[n]=1; return 1;}
    if (n===2) { cache[n]=2; return 2;}

    if (cache[n]===undefined)
        cache[n] = climbStairs(n-1) + climbStairs(n-2);
    return cache[n];
}

var climbStairsRecursion = function(n){
    if (n<2) return 1;
    
    return climbStairsRecursion(n-1)+climbStairsRecursion(n-2);
}


console.log(climbStairs(39));
console.log(climbStairsRecursion(39));