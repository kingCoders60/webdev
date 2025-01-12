// function overload(x){
//     return function inner(y){
//         console.log(x);
//         console.log(y);
//         return x+y;
//     };
// }

// const add = overload(5);
// console.log(add(10));
// console.log(add(15));


// reduce method...
// const sum = [1, 2, 3000, 400].reduce((acc,raw) => Math.max(acc,raw), 0);
// console.log(sum); 


//output

 let x=90;
function foo(x){
    console.log(x);
    let x=20;
}
console.log(foo());

//output2
// const arr=[1,2,3];
// // arr.length=0;
// console.log(arr);