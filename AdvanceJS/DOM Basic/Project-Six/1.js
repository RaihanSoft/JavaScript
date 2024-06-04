var arr = [
    {dp:"https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVufGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1489389944381-3471b5b30f04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMHN0cnVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1534777410147-084a460870fc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHN0cnVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1680404114169-e254afa55a16?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YSUyMHN0cnVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVufGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1489389944381-3471b5b30f04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMHN0cnVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1534777410147-084a460870fc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHN0cnVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1680404114169-e254afa55a16?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YSUyMHN0cnVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1534777410147-084a460870fc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHN0cnVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1680404114169-e254afa55a16?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YSUyMHN0cnVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"},

];
var s = document.querySelector(".line")
var clutter = " "
arr.forEach(function(elem,idx){
    clutter += `<div class="story"> <img id ="${idx}" src="${elem.dp}" alt=""></div>`
});
s.innerHTML = clutter
s.addEventListener("click",function(dets){
    document.querySelector(".full").style.display = "block"
    document.querySelector(".full").style.backgroundImage =  `url(${arr[dets.target.id].story})`
setTimeout(function(){
    document.querySelector(".full").style.display = "none"
},2000)
    
});