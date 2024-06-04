//selection of an Element
var a = document.querySelector("h1")
var b = document.querySelector("h3")
var c = document.querySelector("h2")
var d = document.querySelector("h4")
console.log(a)

//html change
a.innerHTML = "Changed HTML"
b.innerHTML = "Changed"

//css change
a.style.backgroundColor = "red" 
a.style.color = "white" 
c.style.backgroundColor = "green" 

//Event Listener
a.addEventListener("click",function(){
    console.log("hay")
})

d.addEventListener("click",function(){
    d.innerHTML = "My name is Siyam"
    d.style.color = "red"
    console.log(d)

})


