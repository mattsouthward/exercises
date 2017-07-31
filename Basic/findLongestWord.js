/*jshint esversion: 6 */
function findLongestWord(str) {
  var wordLengths = str.split(' ').map(word => word.length).sort((a, b) => b - a);
  return wordLengths[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");
//
//
// function digPow(n, p) {
//   console.log(n.toString(10).split("").reduce(function(acc, cur) {
//     console.log(`before fun - acc: ${acc}, cur: ${cur}, p: ${p}`);
//     Number(acc) += Math.pow(cur, p);
//     p++;
//     console.log(`after fun - acc: ${acc}, cur: ${cur}, p: ${p}`);
//     return acc;
//   }));
// }
