const building = {
        numberOfFloors: 4,
        numberOfAptByFloor: {
            firstFloor: 3,
            secondFloor: 4,
            thirdFloor: 9,
            fourthFloor: 2,
        },
        nameOfTenants: ["Sarah", "Dan", "David"],
        numberOfRoomsAndRent:  {
            sarah: [3, 990],
            dan:  [4, 1000],
            david: [1, 500],
        },
    }
console.log(building["numberOfAptByFloor"])
console.log(`${building["numberOfAptByFloor"]["firstFloor"]} and ${building["numberOfAptByFloor"]["thirdFloor"]}`)
console.log("==================================")
console.log(`${building["nameOfTenants"][1]} and ${building["numberOfRoomsAndRent"]["dan"][0]}`)
if (building["numberOfRoomsAndRent"]["sarah"][1] + building["numberOfRoomsAndRent"]["david"][1]>building["numberOfRoomsAndRent"]["dan"][1]){
        
        building["numberOfRoomsAndRent"]["dan"][1]=1200
        console.log(building["numberOfRoomsAndRent"]["dan"][1])

}