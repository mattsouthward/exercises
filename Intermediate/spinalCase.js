function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var re = new RegExp('[^a-zA-Z]|([a-z])([A-Z])', 'g');
  return str.replace(re, '$1-$2').toLowerCase();
}

spinalCase('ThisIsSpinalTap');
