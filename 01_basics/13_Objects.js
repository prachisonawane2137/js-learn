// create object two ways literal or constructor(create object from constructor is a singleton)



// construtcor object
object.create// define object like this in constructor

// literal object    {}this symbol is empty object


//  how to define symbol in object or function

const sym=Symbol("key1")// asked in interview

const User={

    name:"prachi",
    age:18,
    [sym]:"mykey1",
    email:"prachi@gmail.com",
    city:"Nashik",
    isLoggedIn: false,
    lastLoginDays:["Monday","saturday"]
}

// console.log(User.name);
// console.log(User["email"])
// console.log(  User[sym])
// User.email="prachi@google.com"
// Object.freeze(User)
// User.email="prachis@.com"
// console.log(User.email)
// console.log(User)


User.greeting= function(){
console.log("Hello Js user")
}

User.greeting2=function(){
    console.log(`Hello Js User ${this.name}`)
}

console.log(User.greeting())
console.log(User.greeting2())



