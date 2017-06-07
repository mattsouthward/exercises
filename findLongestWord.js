function findLongestWord(str) {
  var strArray = str.split(' ');
  var elementLength = strArray.map(function(i) {
    return i.length;
  });
  elementLength.sort(function(a, b) {
    return a - b;
  });
  return elementLength[elementLength.length - 1];
}
findLongestWord("The quick brown fox jumped over the lazy dog");
