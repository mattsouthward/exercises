
/*jshint esversion: 6 */
function steamrollArray([x,...xn]){
   return x ? [...Array.isArray(x) ? steamrollArray(x) : [x],...steamrollArray(xn)] : [];
}

steamrollArray([1, [2], [3, [[4]]]]);
