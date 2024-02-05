const encode = (s) => {
  let arr = [s[0]];
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] == arr.at(-1)) {
      count++;

      //If last element
      if (i == s.length - 1) {
        arr[arr.length - 1] = arr.at(-1) + count;
      }
    } else {
      arr[arr.length - 1] = arr.at(-1) + count;
      arr.push(s[i]);
      count = 1;

      //If last element
      if (i == s.length - 1) {
        arr[arr.length - 1] = arr.at(-1) + count;
      }
    }
  }
  console.log(arr.join(""));
};

encode("aaaabbbccdaa");
