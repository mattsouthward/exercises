/*jshint esversion: 6 */
function findElement(arr, func) {
  var num = arr.filter(a => func(a));
  return num[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
