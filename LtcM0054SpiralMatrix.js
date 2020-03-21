let res = [];
var spiralOrder = function(matrix) {
    spiralOrderHelper(0, matrix.length);
    console.log(res);
}

var spiralOrderHelper = function(start, distance) {
    let row=0, col=0;
    let m00, m01, m10, m11;

    if(distance===1){
        res.push(matrix[start][start]);
    }else if (distance===2){
        m00 = matrix[start][start];
        m01 = matrix[start][start+1];
        m10 = matrix[start+1][start+1];
        m11 = matrix[start+1][start];
        res.push(m00); res.push(m01); res.push(m10); res.push(m11);
    }else{
        for (col=start; col<(start+distance-1); col++)
            res.push(matrix[start][col]);
        for (row=start; row<(start+distance-1); row++)
            res.push(matrix[row][start+distance-1]);
        for (col=(start+distance-1); col>start; col--)
            res.push(matrix[(start+distance-1)][col]);
        for (row=(start+distance-1); row>start; row--)
            res.push(matrix[row][start]);
        spiralOrderHelper(start+1,distance-2);
    }
}


let matrix = [ [1,2,3],
               [4,5,6],
               [7,8,9] ]

               

spiralOrder(matrix);