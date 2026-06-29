

function myself(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
}

// myself()


// function addition(number1,number2){

//     console.log(number1+ number2)
// }


    // Or
    
    function addition(number1, number2){

        // let result = number1+number2
       
        // return result
        // console.log ("prachi")// after write code retrun they cannot execute so prachi is not print

        //  OR 


        return number1+number2
    }

// addition(23,2)// o/p: 25

// addition(3, "3")// o/p: 33
const result=addition(23,4)
// console.log("result :" ,result)



// function LoginUserMessage(user){

//     return `${user} just loged in `
// }

// console.log(LoginUserMessage("vijay"))// print vijay

// console.log(LoginUserMessage())


//  we used if else 

  function LoginUserMessage(user){
        if(user===undefined){
            console.log("please enter username")
            return
        }
        
            return `${user}is logged in`
        
    }

    console.log(LoginUserMessage("vijay"))


    //OR 
    function LoginUserMessage(user="vijay"){
        if(user===undefined){
            console.log("please enter username")
            return
        }
        
            return `${user}is logged in`
        
    }

    console.log(LoginUserMessage())


