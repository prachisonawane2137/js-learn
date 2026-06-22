const myArray= [1,2,3,4,5]

//  const array=["raj", "pooja", "Amit"]

//  const arrays=new Array(1,2,3,4)
// //  console.log(myArray[4])
// //  console.log(array[2])
// //  console.log(arrays[3])

// array.push("prachi")// add element to last
// array.push("vijay")
// array.pop()  // remove last element
// array.unshift("vijay")//add element to first  it is not used  bcoz all value are shifted

// array.shift("vijay")// remove vijay name


// console.log(array.includes("ram"))// display boolean value
// console.log(array.indexOf("prachi"))
// const newArr=myArray.join()// numbers converted into string
// console.log(myArray)
// console.log(newArr)
// console.log(typeof newArr)

console.log("A", myArray)
const myn1= myArray.slice(1,4)// remove element of 1 and 4 th index
console.log("B", myArray)
console.log(myn1)


const myn2= myArray.splice(1,3)// manipulate the original value
console.log("c", myArray)
console.log(myn2)
