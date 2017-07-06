function dropElements(arr, func) {
  // Drop them elements.
  return func(arr[0]) || arr.length === 0 ? arr : dropElements(arr.slice(1), func);
}

dropElements([1, 2, 3], function(n) {return n < 3; });
