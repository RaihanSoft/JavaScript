//select element
var a = document.querySelector(".bulb")
var b = document.querySelector("button")


var i =0


b.addEventListener("click",function(){



   if(i==0){
   a.style.backgroundColor = "yellow"
   console.log("clicked")
   this.innerHTML = "OFF"
   i=1

   }else{
    a.style.backgroundColor = "white"
    console.log("Again Clicked")
    this.innerHTML = "ON"
    i=0
    }
})

