let Fruits = ["Apple","Banana","Mango","Orange","Lemon"]
// find
// let Result = Fruits.find((f) => f === "Orange");
// console.log(Result);

// findIndex
// let Result = Fruits.findIndex((f) => f === "Mango" );
// console.log(Fruits);
// console.log(Result);

// Filter
// let Result = Fruits.filter((f) => f === "Lemon" || f ==="Apple");
// console.log(Fruits);
// console.log(Result);

// Slice
// let Result = Fruits.slice(1,4)
// console.log(Result);
// console.log(Fruits);

// Splice === change in Main Array
// let Result = Fruits.splice(0,5, "Apple 1", "Apple 2", "Apple 3", "Apple 4")
// console.log(Fruits);
// console.log(Result);

// Concate
// let result = Fruits.concat("Apple 2");
// console.log(result);
// console.log(Fruits);

// push == chnage main array
// let Result = Fruits.push("Lemon 2")
// console.log(Fruits);
// console.log(Result);

//Map
// let Result = Fruits.map((f)=> {
//     if(f==="Lemon"){
//         return "Lemon";
//     }else
//     return "N/A"
// })

// console.log(Result);
// console.log(Fruits);

//Map MYSELF -2

// let Result = Fruits.map((f)=> f=== "Lemon")
// console.log(Result);


// let Result = Fruits.map((f)=> { if( f=== "Lemon"){
//     return "Lemon"
// }
// else
// return "N/A"
// })
// console.log(Result);
// console.log(Fruits);

//map-3
// let fruits = ["Mango","Banana","Apple"]
// let result = fruits.map((f)=> `${f}-` );
// console.log(result);

//reduce

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let result = numbers.reduce((total,currentValue) => total+currentValue,0);
// console.log(result);


//for of -- forArrays

// let arr = [1,3,4,5,6]
// for(a of arr){
//     console.log(a);
// }

//for in -- forObjects

// let Details = {
//     name : "Raihan",
//     age :22,
//     study : "City University",
//     CGPA : 3.50
// }

// for(key in Details){
//     console.log(Details[key]);
// }

//for Each

// let array = [1,3,4,5,6,]

// array.forEach( function (value){

//     console.log(value);
// } );



//-----------------------------------------> split

let text = "How are you doing today?";
let result = text.split(" ",5)

// let word = result.splice(1,2,)

// result.unshift("Raihan")


// console.log(word);
console.log(result);








