//Destructuring -- object

// const info = {
//     nname : "Raihan",
//     age : 23,

    // Study : {
    //     dep : "CSE",
    //     year : 2,

    //     Sec : {
    //         section : "B",

    //           yer : {
    //                   batch: 61

    //         }
    //     }   
    // }
// }

//1

// const { nname , age } = info
// console.log(nname,age);

//2

// const {Study : {year,dep} = {}}=info
// console.log(year,dep);

//3

// const {Study:{Sec :{yer : {batch} }} = {} } = info
// console.log(batch);