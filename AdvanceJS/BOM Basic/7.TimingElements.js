let time = document.getElementById("time")
let int = document.getElementById("in")

let txt;


function start(){
  txt =  setTimeout(()=>{
        time.innerHTML = "3s leater"

    },3000)
}

stop=()=>{
    clearTimeout(txt)
}

let text

function StartIn(){
   text =  setInterval(function(){
        int.innerHTML = new Date().toLocaleTimeString();
        int.style.color="red"
        int.style.fontWeight ="bolder"

    },1000)
}

function StartSt(){

    clearInterval(text)

}

