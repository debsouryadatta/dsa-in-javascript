
// Brute Force Method
const markRow = (i, m, n, matrix) => {
  for (let j = 0; j < n; j++) {
    if (matrix[i][j] != 0) {
      matrix[i][j] = null;
    }
  }
};

const markCol = (j, m, n, matrix) => {
  for (let i = 0; i < m; i++) {
    if (matrix[i][j] != 0) {
      matrix[i][j] = null;
    }
  }
};

var setZeroes2 = function (matrix) {
  let m = matrix.length; //row
  let n = matrix[0].length; //col

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        markRow(i, m, n, matrix);
        markCol(j, m, n, matrix);
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === null) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};
// console.log(setZeroes2([[1,1,1],[1,0,1],[1,1,1]]));



// Optimal Solution
var setZeroes = function (matrix) {
  let m = matrix.length; //row
  let n = matrix[0].length; //col
  let row = new Array(m);
  let col = new Array(n);


  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] === 1 || col[j] === 1) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

// console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));