/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    arr = arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0 && arr[i + 1] == 0) return true;
        if (arr[i] != 0) {
            let start = 0;
            let end = arr.length - 1;
            while (start <= end) {
                let mid = Math.trunc((start + end) / 2);
                if (2 * arr[i] == arr[mid]) {
                    return true;
                } else if (2 * arr[i] < arr[mid]) {
                    end = end - 1;
                } else {
                    start = start + 1;
                }
            }
        }
    }
    return false;
};
