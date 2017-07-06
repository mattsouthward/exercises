function truthCheck(collection, pre) {
  // Is everyone being true?
  for(var obj in collection) {
      if(!collection[obj].hasOwnProperty(pre)) {
          return false;
      } else if(!collection[obj][pre]) {
          return false;
      }
  }
  return true;
}


truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
