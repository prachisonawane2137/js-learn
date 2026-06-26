const arr=[1,2,3,4,5,6]

const arr1=[7,8,9]

const arr2=arr.concat (arr1)// used concat method
// console.log(arr2)

const arr3= [...arr , ...arr1]// used spred method
// console.log(arr3)


const anotherArray=[1,2,3,4,[10,5,6,7],9]// store in a one memory
const realArray=anotherArray.flat(Infinity)
// console.log(realArray);

console.log(Array.isArray("Prachi"))// ask it is array or not
console.log(Array.from("prachi"))// converted into array
console.log(Array.from({name:"prachi"}))// ask for interview(create are from kry or value)


let score1=100
let score2 =200
let score3=300

console.log(Array.of (score1,score2,score3))// store value in a array

