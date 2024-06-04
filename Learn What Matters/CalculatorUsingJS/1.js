var display = document.querySelector(".display")
var one = document.querySelector("#one")
var two = document.querySelector("#two")

var plus = document.querySelector("#plus")

one.addEventListener("click",function(){
    display.innerHTML = 1
    display.style.paddingLeft = "160px"
    display.style.paddingTop = "50px"
})

two.addEventListener("click",function(){
    display.innerHTML = 2
    display.style.paddingLeft = "160px"
    display.style.paddingTop = "50px"
})



plus.addEventListener("click",function(){
    display.innerHTML = "+"
    display.style.paddingLeft = "160px"
    display.style.paddingTop = "50px"
})
