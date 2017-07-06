/*jshint esversion: 6 */
function addTogether() {
  var args = [...arguments];
  // Make sure all args are numbers
  function isNumber(n) {
    return typeof n === 'number';
  }

  for(var i in args) {
      if(!isNumber(args[i])) {
          return undefined;
      }
  }
  // If only one arg was provided, return an adder function
  // Provided values are numbers
  if(args.length === 1) {
      return function(x) {
          if(!isNumber(x)) {
            return undefined;
          }
          return args[0] + x;
      };
  }
  return args.reduce((a, b) => a + b);
}

addTogether(2,3);
