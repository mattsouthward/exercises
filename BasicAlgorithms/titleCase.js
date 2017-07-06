/*jshint esversion: 6 */
function titleCase(sentence) {
  return sentence.split(' ').map(word => word[0].toUpperCase() + word.substr(1).toLowerCase()).join(' ');
}

titleCase("I'm a little tea pot");
