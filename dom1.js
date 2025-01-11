// console.log("hellow");

// let promise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//        console.log('I am inside promise'); 
//     }, 5000); 
//     // resolve(2000);`    reject(new Error("Err"))
// })

// promise.then((value)=>{console.log('1234')})
// promise.catch((error)=>{console.log("Received an error")})
// console.log('phela'); 

let wada1 = new Promise(function(resolve,reject){
    setTimeout(()=>{console.log('SetTime  Out started!');},2000);
    resolve(true);
})
let output = wada1.then(()=>{
    let wada2= new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("wada2 is also started..")
        },3000)
    })
    return wada2;
})
output.then((value)=>console.log(value)); 