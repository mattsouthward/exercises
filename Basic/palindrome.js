function palindrome(str) {
  // Define a regular expression to match
  // non-alphanumeric characters
  var re = /([^a-z0-9])/gi;

  // Replace the matched non-alphanumeric characters
  // with empty string
  var cleanStr = str.replace(re, '').toLowerCase();

  // Compare cleanStr to the reverse, if it matches, return true
  return (cleanStr === cleanStr.split('').reverse().join('')) ? true : false;
}

palindrome("e Y*e&^ _");
