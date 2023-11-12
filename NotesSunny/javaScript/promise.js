/////++++Resolve+++/////

console.log("---Resolve----");
let p1 = new Promise((resolve,reject)=>{
    console.log("Proming Is Pending");
 setTimeout(()=>{
    console.log("Promise is Succefully loaded Resolve");
 },5000)
 resolve(true)
})
p1.then((value)=>{
   console.log("Promise is complete");
})
p1.catch((error)=>{
    console.log("some Error occurred in p2");
})
/////++++Reject+++/////

console.log("--------------------------------------------------");
console.log("---Remove---");

let p2= new Promise((resolve,reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
       reject(new Promise("Enter your Promise"))
    },5000)
   
})
p2.then((value)=>{
    console.log("Promise is complete");
 })
p2.catch((error)=>{
     console.log("some Error occurred in p2");
 })