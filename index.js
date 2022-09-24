const groupA = ["Tomi", "Samuel", "Shola", "Matty", "Kehinde"]
const GroupB = ["Lola", "Ore", "Tola", "Funmi", "Ibk"]
const Places = ["the Beach", "the cinema", "a restaurant", "mall", "coldstone creamery"]


var arand = groupA[Math.floor(Math.random() * groupA.length)] 
var brand = GroupB[Math.floor(Math.random() * GroupB.length)]
var placesrand = Places[Math.floor(Math.random() * Places.length)]

console.log(`${arand} + ${brand} will be going on a date to ${placesrand}`)