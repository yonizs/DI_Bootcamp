let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.splice(2,3,"Jason")
people.push("Yoni")
console.log(people.push);
console.log(people.indexOf("Mary"));
console.log(people.slice(1,3));
console.log(people.indexOf("Foo"));
// Why does it return -1 ? -1 means that it doesn't exist in the array.
let last =people[1];
// part 2
for (people=1; people <=5; people++) {
 console.log("Mary")
 console.log("Devon")
 console.log("Jason")
 break;
 console.log("Yoni")
}