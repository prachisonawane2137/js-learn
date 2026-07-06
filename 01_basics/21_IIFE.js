// IIFE : Immediately Invked Function Exoression

//IIFE used  sometime problem  from  globel scope pollution so remove the pollution 

// function chai(){
//     console.log(`DB connected`)
// }
// chai()// normal function 

//IIFE

// (function chai(){   // It is a Name IIFE
//     console.log(`DB Connected`)
// })()



// using Arrow function

(()=>{     // unname IIFE
    console.log(`DB Connected`)
})();                                // write Two IIFE at time seperated with ; semicolne
                                               

((name)=>{   //unnamed IIFE or parameterised IIFE
    console.log(`DB Connected to ${name}`)
})("prachi")