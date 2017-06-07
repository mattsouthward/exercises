function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });
  var s = arr.findIndex(function(val) { return val >= num; });
  return s < 0 ? arr.length : s;
}
