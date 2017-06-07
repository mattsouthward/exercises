function bouncer(arr) {
  var filtered = arr.filter(function(val) {
    return val;
  });
  return filtered;
}

bouncer([7, "ate", "", false, 9]);
