// function titleCase(str) {
//     return str.split(' ').map(function(s) {
//         return s[0].toUpperCase() + s.substr(1).toLowerCase();
//     }).join(' ');
// }

function titleCase(sentence) {
  return sentence.split(' ').map(word => word[0].toUpperCase() + word.substr(1).toLowerCase()).join(' ')
}

titleCase("I'm a little tea pot");
