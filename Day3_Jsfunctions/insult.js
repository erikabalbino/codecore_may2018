const insult = function(name) {
    const randNum = Math.floor(Math.random() * 3);
  
    // You can return multiple times from a function, but
    // only the first return that occurs matters.
    // Once a function returns, it terminates at the
    // of the return.
    if (randNum == 0) {
      return `${name}, you doofus!`;
    } else if (randNum == 1) {
      return `${name}, you father smelt of elderberries`;
    } else {
      return `Your mother mother was a hamster, ${name}`;
    }
    // return name + ", you doofus!"
  };

console.log(insult("Bob"));
console.log(insult("Jane"));



