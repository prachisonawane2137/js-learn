

// forEach loop


// const arr=["Mango", "Banana","Orange","Kiwi"]

// arr.forEach(function (item){
//     console.log(item)
// })// using function


const arrys=["green","yellow","orange","pink"]
// arrys.forEach(item=>{
//  console.log(item)
// })// using arrow function


// function printMe(item){
//     console.log(item)
// }

// arrys.forEach(printMe)// print function throgh

// arrys.forEach((index, item, arr)=>{
//     console.log(index, item, arr);
    
// })//  arrow function have a multiple parameter


// forEach loop for array Object



const mycode=[
    {
        code:121,
        lang:"Java",

    },
    {
        code:122,
        lang:"JS",

    },
    {
        code:123,
        lang:"Python",

    },
    {
        code:124,
        lang:"PHP",

    },
]

mycode.forEach((item)=>{
    console.log(item.lang, item.code)
})// o/p: return code and lang 