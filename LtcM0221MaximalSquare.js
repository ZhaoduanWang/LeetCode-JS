var maximalSquare = function(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    var maxArea = 0;

    for (let i=0; i<m-1; i++) {
        for (let j=0; j<n-1; j++) {
            if (matrix[i][j]===1) {
                let d;
                d = maximalSquareHelper(i,j);
                d*d > maxArea ? maxArea = d*d : maxArea;
                d>0 ? j += d : j;
            }
        }
    }
    return maxArea;

    function maximalSquareHelper(r,l){        
        let r2=r;
        let l2=l;

        for (;r2<m;r2++){
            for (;l2<n;l2++){
                if (matrix[r2][l2]===0) break;
            }
            if (matrix[r2][l2]===0) break;
        }            
        d = Math.min(r2-r, l2-l-1);
        //console.log(r,l,r2,l2,d);
        return d;
    }
};

console.log(maximalSquare(
    [
        [1,0,1,0,0],
        [1,0,1,1,1],
        [1,1,1,1,1],
        [1,0,0,1,0]
    ]
));