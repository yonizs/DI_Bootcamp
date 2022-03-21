let sentence ="The movie is not that bad, I like it";
let sentenceArr = sentence.split(" ");
let wordNot = sentence.substring(3,4);
let wordBad = sentence.replace("not that bad","good");
console.log(wordBad)