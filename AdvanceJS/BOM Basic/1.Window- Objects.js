let Height = document.getElementById("Height");
let Width = document.querySelector(".Width");

Height.innerHTML = "Height is: " + innerHeight
Width.innerHTML = "Width is : " + innerWidth

//2

let myWindow;

openWindow = ()=> {
    myWindow = window.open("https://google.com")
}
closeWindow = ()=> {
    myWindow.close()
}

