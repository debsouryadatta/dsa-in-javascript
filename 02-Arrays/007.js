
  
  var rotate = function(matrix) {
      // 1. Transverse
      for(let i=0;i<matrix.length;i++){
          for(let j=i;j<matrix[0].length;j++){
            let temp = 0;
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
          }
      }
      console.log(matrix);
  
      // 2. Reverse
      for(let i=0;i<matrix.length;i++){
          for(let j=0;j<matrix[0].length/2;j++){
            let temp = 0;
            temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix.length - 1 - j];
            matrix[i][matrix.length - 1 - j] = temp;
          }
      }
      return matrix;
  };


  console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));