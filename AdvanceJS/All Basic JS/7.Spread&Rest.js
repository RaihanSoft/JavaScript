//1
//Spread = Array Copy = Reference 
//array
// let arr = ["Raihan","Siyam","Sam","Baee"]
// let result = [...arr]
// result.push("Copy")
// console.log(result);
// console.log(arr);

//array of object------ 1time copy only
// let arr = [{  
//     name : "Raihan"
// },{
//     age :23
// }]
// let result = [...arr]
// result.push("year")
// console.log(result);
// console.log(arr);


//object
// let arr = {
//     name : "Raihan",
//     age : 20
// }
// let result= {...arr}
// console.log(result);


//2
//Rest
// sum = (text,...rest) => {
//     let result=  rest.reduce((total,curValue) =>total+curValue,0)
//     console.log(`${text} ${result}`);
//   }
 
//  sum("Total Sum is :",1,2,3,5,500);