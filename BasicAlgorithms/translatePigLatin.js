function translatePigLatin(str) {
  var re = /^([^aeiou]{1,2})(\w+)/;
  return str.match(re) ? str.replace(re, '$2$1ay') : str + 'way';
}

translatePigLatin("consonant");
