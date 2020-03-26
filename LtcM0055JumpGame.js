var canJump = function(nums) {
    let l = nums.length-2;
    let r = nums.length-1;
    let gap, steps;
    steps = 0;
    
    for ( ; l>0; l--){
        gap = r -l;
        if ((nums[l]+steps)>=gap) { 
            r -= 1;
            steps = 0;
        }else{
            steps += nums[l];
        }
    }
    if ((nums[l]+steps)>gap) return true;
    else return false;

}

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));