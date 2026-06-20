let myDate=new Date()
// console.log(myDate) //  o/p: 2026-06-20T11:24:43.024Z

// console.log(typeof myDate)// o/p : object  ask for interview

// console.log(myDate.toString())// print day date and time   o/p: Sat Jun 20 2026 11:25:18 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString())// print only Day date remove time  o/p: Sat Jun 20 2026

// console.log(myDate.toISOString())  //remove day print date and time   o/p:  2026-06-20T11:27:40.322Z

// console.log(myDate.toJSON()) // toISOString and to JSON  both methods are same  o/p: 2026-06-20T11:30:36.721Z

// console.log(myDate.toLocaleDateString())// print date in normal format  o/p:  6/20/2026

// console.log(myDate.toLocaleTimeString())// print a time only in normal format  o/p:    11:33:07 AM


// let myCreatedDate=new Date(2026, 5, 20)// month satred with zero(0)
// console.log(myCreatedDate.toDateString())


// let myCreatedDate=new Date(2026, 5, 20, 5,17)// month satred with zero(0)
// console.log(myCreatedDate.toLocaleString())// print date and time 

let newDate=new Date()
// console.log(newDate)
console.log(newDate.getDate())// print only month
console.log(newDate.getDay())// print day
console.log(newDate.getFullYear())//2026
console.log(newDate.getHours())//12 
 console.log(newDate.getMinutes())//13
 console.log(newDate.getMonth())//5