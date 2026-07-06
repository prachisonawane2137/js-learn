

// const user ={

//     username:"prachi",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`)// this key word only access current object properties
//     }

// }
// // user.welcomeMessage()
// // user.username="vijay"
// // user.welcomeMessage()
// console.log(this) // out of object define a empty scope


// arrow function syntax :  ()=>{}
    

    //  This key word not used in arrow function

    // This is  a explicit written

    // function Addition(num1, num2){

    //     return num1+num2       
    // }
    // console.log(Addition(3,4))

    const Addition=()=>{
        let username="pirachi"
        console.log(this.username)
    }
    console.log(Addition())// o/p: undefined


    // if we used curely beacess that time used return key word print statement

    // implicit written   //dose not written return key word

    // const Addition= (num1, num2 )=> num1+num2
    // const Addition= (num1, num2 )=> (num1+num2)

//     const Addition=(num1, num2)=>({username:"prachi"})// retrun object this way
// console.log(Addition())