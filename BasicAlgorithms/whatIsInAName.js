function whatIsInAName(collection, source) {
  console.log(Object.keys(collection));
}


whatIsInAName([{ first: "Romeo", last: "Montague" },
                { first: "Mercutio", last: null },
                { first: "Tybalt", last: "Capulet" }],
                { last: "Capulet" });
