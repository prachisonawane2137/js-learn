// two types of memory 
// stack Memory : copy of object/variable(primitive)
// Heap memory : reference of  original object(non primitive)
let name="prachi"
let username=name
username="vijay"
console.log(username)

let user1={
    name:"sonu",
    age:23
}
let user2=user1
user2.name="kalya"
console.log(user2)