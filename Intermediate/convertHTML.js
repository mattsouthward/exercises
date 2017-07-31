/*jshint esversion: 6 */

function convertHTML(str) {
  var re = new RegExp(/[^\w\s]/g);
  var entities = { "!": "&excl;",
                   '"': "&quot;",
                   "#": "&num;",
                   "$": "&dollar;",
                   "%": "&percnt;",
                   "^": "&Hat;",
                   "&": "&amp;",
                   "'": "&apos;",
                   "(": "&lpar;",
                   ")": "&rpar;",
                   "*": "&ast;",
                   "+": "&plus;",
                   ",": "&comma;",
                   ".": "&period;",
                   "/": "&sol;",
                   ":": "&colon;",
                   ";": "&semi;",
                   "<": "&lt;",
                   ">": "&gt;",
                   "?": "&quest;",
                   "@": "&commat;",
                   "[": "&lsqb;",
                   "]": "&rsqb;",
                   "\\": "&bsol;",
                   "`": "&grave;",
                   "{": "&lcub;",
                   "}": "&rcub;"
  };

  var matchedEntities = str.match(re);
  if(matchedEntities) {
    matchedEntities.forEach(a => str = str.replace(a, entities[a]));
  }
  return str;
}

convertHTML("abc");
