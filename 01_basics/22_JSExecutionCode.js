//  type of execution phase
// 1. Global Execution context 
//2. Function Execution context
// JS code excute in two phases 1. memory creation phase/ memory phase (memory alocate only)



//   2. Execution Phase

  // code 
    
  let val1=10
  let val2 =5

  function Demo(num1 num2){
     let total= num1+ num2
     return total
  }

  let result= (val1 , val2)
  let result2=(10,2)

//  1. Global execution (this)
//  2.  memory phase(  val1- undefine, val2- undefine, function demo - defination, result1- undefine, result2- undefine)


// 3. Execution phase
// val1=10, val2=5 , demo (new variable environment + execution thread) ->  memoy phase (val1- undefine  , val2- undefine, 
// total- undefine ) execution phase(val1-10 , val2-5, total- 15)


// call stack   first in last out