let s = 6;
let string = "";
for (let i = 1; i <= s; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);