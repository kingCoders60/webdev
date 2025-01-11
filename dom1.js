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

//Example of prmomise chaining

// let wada1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{console.log('SetTime  Out started!');},2000);
//     resolve(true);
// })
// let output = wada1.then(()=>{
//     let wada2= new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve("wada2 is also started..")
//         },3000)
//     })
//     return wada2;
// })
// output.then((value)=>console.log(value)); 
 
// async function utility(){
//     let maha = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Delhi me garmi hai")
//         },1000);
//     });   
    
//     let wb = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("wb is cool")
//         },5000);
//     });
//     let m=await maha;
//     let w=await wb;
//     return [m,w]; 
// }
// console.log(utility());
 
let obj={
    heading:"head"
}
async function utility(){
    let content=await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let output =  await content.json();
    console.log(output);
}
console.log(utility);