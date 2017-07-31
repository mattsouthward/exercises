/*jshint esversion: 6 */
function diffArray(arr1, arr2) {
  //Create diffArray adding elements in arr1 that missing from arr2
  var diffArray = arr1.filter((arr1Element) => arr2.indexOf(arr1Element) === -1);

  //concat to diffArray the elements in arr2 that are missing from arr1
  diffArray = diffArray.concat(arr2.filter((arr2Element) => arr1.indexOf(arr2Element) === -1));

  return diffArray;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
