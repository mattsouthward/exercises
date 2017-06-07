function reverseString(str) {
  return String(str.split('').reverse().join(''));
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
console.log(typeof reverseString("Some string") === "string")
