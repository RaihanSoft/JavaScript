var a = document.querySelector("h5")
var add = document.querySelector(".Add")

var i = 1

add.addEventListener("click",function(){

    if(i==1){
    a.innerHTML = "Friends"
    a.style.color = "green"
    add.innerHTML = "Remove"
    i=2
    }else{
    a.innerHTML = "Strenger"
    a.style.color = "red"
    add.innerHTML = "Add Frined"
    i=1
    }
    console.log(2+3+'7')

})








