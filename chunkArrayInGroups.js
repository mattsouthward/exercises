function chunkArrayInGroups(arr, size) {
  var slicedArr = [];
  for (var i = 0; i < arr.length; i += size) {
    slicedArr.push(arr.slice(i, size + i));
  }
  return slicedArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
