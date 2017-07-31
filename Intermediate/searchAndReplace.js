/*jshint esversion: 6 */
function myReplace(str, before, after) {
  var re = new RegExp(before);

  return str.replace(before, a => before.charCodeAt(0) > 64 && before.charCodeAt(0) < 91 ? after[0].toUpperCase() + after.substr(1) : after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
