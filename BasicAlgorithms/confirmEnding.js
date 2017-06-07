function confirmEnding(str, target) {
    return str.substr(0 - target.length) === target;
}

confirmEnding("Bastian", "n");
