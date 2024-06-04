const throttleFunction = (func, delay)=>{
    let prev = 0 ;
    return (...args) =>{
        let now = new Date().getTime();
        if(now -prev> delay){
            prev = now ;
            return func(...args);
        }
    }
}

var  con = document.querySelector(".container")

con.addEventListener("mousemove",

 throttleFunction((dets)=>{
  var div = document.createElement("div")
  div.classList.add('imagediv');

  div.style.left=dets.clientX+'px'
  div.style.top=dets.clientY+'px'

  var img = document.createElement("img")
  img.setAttribute("src", "https://images.unsplash.com/photo-1580483046931-aaba29b81601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVzc2lhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D");

  div.appendChild(img);
  document.body.appendChild(div);

  gsap.to(img, {
    y: "0",
    ease: Power1,
    duraton : .6
  })
  gsap.to(img, {
    y: "100%",
    delay: .6,
    ease: Power2
  })

  setTimeout(function(){
    div.remove();

  },2000)
    
},500));