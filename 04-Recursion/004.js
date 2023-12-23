// O(n) solution
// let recur = (x, n) => {
//   console.log(n);
//   if (n === 0) {
//     return 1;
//   }

//   let xnm1 = recur(x, n - 1);
//   let xn = xnm1 * x;
//   return xn;
// };

// var myPow = function (x, n) {
//   return recur(x, n);
// };

// console.log(myPow(2, -2));

// O(log n) solution
let recur = (x, n) => {
  if (n === 0) return 1;
  if (x === 0) return 0;

  let res = recur(x, Math.floor(n / 2));
  res = res * res;
  if (n % 2 === 0) {
    return res;
  } else {
    return res * x;
  }
};

var myPow = function (x, n) {
  if (n < 0) {
    return 1 / recur(x, -n);
  } else {
    return recur(x, n);
  }
};

console.log(myPow(2, -2));
