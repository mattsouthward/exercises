
function rot13(str) { // LBH QVQ VG!
  // Split the string into an array and convert
  // each character into it's corresponding
  // character code
  var sArray = str.split('').map(function(val) {
        return val.charCodeAt();
  });

  // loop over the array and rot(-13) except spaces (code = 32)
  // and other punctuation
  for (var i = 0; i < sArray.length; i++) {
    switch (true) {
        case sArray[i] == 32:
            sArray[i] = ' ';
            break;
        case sArray[i] < 65:
            sArray[i] = String.fromCharCode(sArray[i]);
            break;
        case sArray[i] - 13 < 65:
            sArray[i] = String.fromCharCode(sArray[i] - 13 + 26);
            break;
        default:
            sArray[i] = String.fromCharCode(sArray[i] - 13);
    }
  }

  // return the array after converting it back to a string
  return sArray.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
