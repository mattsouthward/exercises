// function largestOfFour(numArray) {
//   return numArray.map(function(arrayElement) {
//     arrayElement.sort(function(a, b) {
//       return b - a;
//     });
//     return arrayElement[0];
//   });
// }
function largestOfFour(arrays) {
  return arrays.map(arrayOfNumbers => arrayOfNumbers.sort((a,b) => b - a)[0]);
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
