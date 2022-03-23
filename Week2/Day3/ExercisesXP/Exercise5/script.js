let family = {
 lastName: "Freidman",
 members : 5,
 city : "Jerusalem",
};

console.lo

for (let key in family) {
 console.log(`the key is ${key}`)
 console.log(`the value is ${family[key]}`)
}