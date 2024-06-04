var con = document.querySelector(".container")
var cur = document.querySelector(".cursor")





con.addEventListener("mousemove",function(dets){
   cur.style.left = dets.x+"px"
   cur.style.left = dets.y+"px"
})