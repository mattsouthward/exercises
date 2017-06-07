function mutation(arr) {
  // This solution seems a bit hacky

  // Create unique, sorted strings
  var s0 = Array.from(new Set(arr[0].toLowerCase())).sort().join();
  var s1 = Array.from(new Set(arr[1].toLowerCase())).sort().join();

  // if s1 is longer than s0, then there are characters in s1 that are not in s0
  if (s1.length > s0.length) {
      return false;
  }
  for (var i = 0; i < s1.length; i++) {
      if (s0.indexOf(s1[i], 0) < 0) {
          return false;
      }
  }
  return true;
}
