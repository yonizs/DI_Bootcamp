let building = {
 numberOfFloors : 4,
 numberOfAptByFloor : {
     firstFloor : 3,
     secondFloor : 4,
     thirdFloor : 9,
     fourthFloor : 2,
 },
 nameOfTenants : ["Sarah", "Dan", "David"],
 numberOfRoomsAndRent:  {
     sarah: [3, 990],
     dan :  [4, 1000],
     david : [1, 500],
 },
}
 
 for (let key in building) {
console.log(`is how many floors in the building.numberOfAptByFloor.length`)

 }

 let onethree = building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor
 console.log(`the number of apts in floors one and three is ${onethree}`)
 
let dan = building.nameOfTenants[1] + building.numberOfRoomsAndRent.dan[0];
console.log(dan)

if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] < building.numberOfRoomsAndRent.dan[1]) {
building.numberOfRoomsAndRent.dan.splice(1,2,1200)
console.log(splice)
}
