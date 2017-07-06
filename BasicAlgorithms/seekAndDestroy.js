/*jshint esversion: 6 */
function destroyer(arr, ...args) {
    return arr.filter( val => !(args.includes(val)) );
}
