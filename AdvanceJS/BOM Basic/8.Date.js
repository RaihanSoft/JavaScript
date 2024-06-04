// let result = new Date(2022, 0 , 15, 23,50);
// let result = new Date("October 13 , 2022 , 11:13:00")
// document.write(result)



let result = new Date()
let demo = document.getElementById("demo")
demo.innerHTML = result.toISOString();

//toString
//toUTCString
//toDateString
//toISOString
