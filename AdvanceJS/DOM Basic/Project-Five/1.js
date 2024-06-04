var a = document.querySelectorAll(".container")
var b = document.querySelectorAll(".container img")

a.forEach(function(val){

    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1
        // val.style.backgroundColor ="red"
    });
    

    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0
        // val.style.backgroundColor ="transparent"
    });

    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.x+"px"
        val.childNodes[3].style.top = dets.y+"px"
        // val.style.backgroundColor ="transparent"
    });

});
    



