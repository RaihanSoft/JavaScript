let href = document.getElementById("href")
let hostname = document.getElementById("hostname")
let pathname = document.getElementById("pathname")
let protocol = document.getElementById("protocol")

href.innerHTML = "Href is: " + location.href
hostname.innerHTML = " Hostname is: " +location.hostname

pathname.innerHTML = " pathname is: " +location.pathname
protocol.innerHTML = " protocol is: " +location.protocol
 

function assign(){
    window.location.assign("https://google.com", "_blank")
}