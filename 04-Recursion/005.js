// Brute force solution
// function recur(a, b, l, count) {
//   if (count > a) {
//     return l;
//   }

//   if (a % count == 0 && b % count == 0) {
//     l = count;
//   }
//   count++;
//   return recur(a, b, l, count);
// }

// function lcmAndGcd(a, b) {
//   let l,hcf;
//   let count = 1;
//   //code here
//   if (a < b) {
//     hcf = recur(a, b, l, count);
//   } else {
//     hcf = recur(b, a, l, count);
//   }
//   let lcm = (a * b) / hcf;
//   return `${lcm} ${hcf}`
// }

// console.log(lcmAndGcd(625,90));



// Optimal solution
let gcd = (divisor, dividend) => {
  let remainder = dividend % divisor;
  return remainder === 0 ? divisor : gcd(remainder, divisor);
};

let lcmAndGcd = (a, b) => {
  let hcf;
  if (a < b) {
    hcf = gcd(a, b);
  } else {
    hcf = gcd(b, a);
  }
  let lcm = (a * b) / hcf;
  return `${lcm} ${hcf}`;
};

console.log(lcmAndGcd(5,10));

