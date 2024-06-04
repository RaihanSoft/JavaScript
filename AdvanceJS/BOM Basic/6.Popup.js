//--------------------------------------------------Alert
// function alerrt(){

//    window.alert("Raihan")


// }
//--------------------------------------------------Confirm
// let Con = document.getElementById("Con")


// function Confirm(){
//    if( confirm("Raihan")){
//     Con.innerHTML = "Clicked Ok"
//     Con.style.color = "green"
//    }else{
//     Con.innerHTML = " Clicked Cencle"
//     Con.style.color = "red"
//    }

// }
//--------------------------------------------------------Promt

let Con = document.getElementById("Pro")


function Promt(){
   let result =  prompt("Enter Your Name Here")

   if(result === null || result === ""){
    Con.innerHTML = "Please Try Again!"
    Con.style.color = "red"
   }else{
    Con.innerHTML = "Hello" + " "+ result +" "+ "How Are You?"
    Con.style.color = "green"
   }


}