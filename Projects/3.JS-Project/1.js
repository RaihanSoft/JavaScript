window.addEventListener("mousemove",function(dets){
    var container = this.document.querySelector(".container");
    
    var xval = gsap.utils.mapRange(
        0, 
    window.innerWidth,
    100+container.getBoundingClientRect().width/2, 
    window.innerWidth-    (100+container.getBoundingClientRect().width/2), 
    dets.clientX
);
   gsap.to('.container',{
    left: xval,
    ease: Power3

   });

});