let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names = names.sort();
console.log(names);
let societyName = ";"

 for (let person of names){
 console.log(`the first letter of the name ${person} is the ${person.charAt(0)}`)
 societyName += person.charAt(0);
}