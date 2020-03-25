var rotate = function(matrix){
    let n = matrix.length;
    //let res = [...matrix];

    console.log(n);
    for (i=0; i<n; i++)
        for (j=0; j<n; j++){
            col = (n-1-i);
            console.log(`[${i}][${j}]${matrix[i][j]} -> [${j}][${col}]`);
            // ? can't clone a matrix res, then put temp into clone matrix
            //temp = matrix[i][j];
            //res[j][col] = temp;
        }
    
    //console.log(res);
}

matrix1 = [ [1,2,3],
            [4,5,6],
            [7,8,9] ];

matrix2 = [ [5, 1, 9, 11],
            [2, 4, 8, 10],
            [13,3, 6,  7],
            [15,14,12,16] ];

rotate(matrix1);