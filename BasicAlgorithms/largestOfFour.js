function largestOfFour(arr) {
  return arr.map(function(i) {
    i.sort(function(a, b) {
      return a - b;
    });
    return i[i.length - 1];
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
