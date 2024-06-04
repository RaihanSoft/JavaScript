var a = document.querySelector("h1")
var i = 0

a.addEventListener("click",function(){

    if(i==0){
    a.innerHTML= " Raihan"
    a.style.color = "red"
    i=1
    }else{
        a.innerHTML = "yellow"
        a.style.color = "yellow"

        i=0

    }
})

