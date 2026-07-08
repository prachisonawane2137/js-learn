   //for of loop


//    const myArray=[1,2,3,4,5]

//    for(const arr of myArray){
//     console.log(arr)
//    }  //o/p: 1 2 3 4 5


// const greeting ="Hello World"

// for(const greet of greeting){
//     console.log(greet);   //o/p: H e l l o  W o r l d
    
// }


  // Map   ( print in order and unique value)


  const map = new Map()
  map.set("IN","India")
  map.set("UK", "United State")
  map.set("FR", "France")
  map.set("IN","India")

//   console.log(map);

  for (const [key, value ] of map){
    console.log([key, value])
  }
  