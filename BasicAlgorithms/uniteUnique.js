/*jshint esversion: 6 */
// Function that takes two or more arrays and returns a new array
// of unique values in the order of the original provided arrays.

function uniteUnique(arr) {
    var args = [...arguments];
    var unique = [];
    args.map(arrInArgs => arrInArgs.map(num => !(unique.includes(num)) ? unique.push(num) : ""));
    return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
