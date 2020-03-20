var setZeroes = function(matrix){
    let row0flag = false, col0flag = false;
    let row = matrix.length;
    let col = matrix[0].length;

    for (i=0; i<row; i++)
        if (matrix[i][0] === 0) {col0flag=true; break;}

    for (j=0; j<col; j++)
        if (matrix[0][j] === 0) {row0flag=true; break;}
    console.log(row0flag, col0flag);    

    for (i=0; i<row; i++)
        for (j=1; j<col; j++)
            if (matrix[i][j]===0) {matrix[i][0]=0; break;}
    for (j=1; j<col; j++)
        for (i=0; i<row; i++)
            if (matrix[i][j]===0) {matrix[0][j]=0; break;}
    
    //Set Maxtrix
    for (i=1; i<row; i++)
        if (matrix[i][0]===0){
            for (j=1; j<col; j++) matrix[i][j] = 0;
        }
    for (j=1; j<col; j++)
        if (matrix[0][j]===0){
            for (i=1; i<row; i++) matrix[i][j] = 0;
        }
    
    if (row0flag===true) 
        for (j=0; j<col; j++) matrix[0][j] = 0;
    if (col0flag===true)
        for (i=0; i<row; i++) matrix[i][0] = 0;
     
    
    return matrix;
}

let matrix3x3 = [ [1,1,1],
                  [1,0,1],
                  [1,1,1] ];

let matrix3x4 = [ [0,1,2,0],
                  [3,4,5,2],
                  [1,3,1,5] ];

console.log(setZeroes(matrix3x3));