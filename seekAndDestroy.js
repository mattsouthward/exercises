function destroyer(arr) {
    var args = [].slice.call(arguments);
    args = args.slice(1);
    return arr.filter(function(val) {
       return !(args.includes(val));
    });
}
