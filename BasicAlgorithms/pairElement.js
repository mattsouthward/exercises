function pairElement(str) {
    return str.split('').map(function(a) {
        switch(a) {
            case "A":
                return ["A", "T"];
            case "T":
                return ["T", "A"];
            case "G":
                return ["G", "C"];
            case "C":
                return ["C", "G"];
        }
    });
}

pairElement("GCG");
