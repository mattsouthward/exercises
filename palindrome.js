function palindrome(str) {
  // Define a regular expression to match
  // alphanumeric characters
  var re = /([^a-z0-9])/gi;

  // Replace the matched non-alphanumeric characters
  // with empty string
  var cleanStr = str.replace(re, '').toLowerCase();

  // Compare cleanStr to the reverse, if it matches, return true
  if (cleanStr === cleanStr.split('').reverse().join('')) {
    return true;
  }
  return false;
}


palindrome("e Y*e&^ _");
