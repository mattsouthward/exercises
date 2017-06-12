function sumAll(arr) {
  //Create an array from the provided values
    var range = Array.from({length: (Math.max(...arr)+1) - Math.min(...arr)}, (x, i) => i + Math.min(...arr));
  //return the sum of the range
    return range.reduce((prev, curr) => prev + curr);
}

sumAll([1, 4]);
