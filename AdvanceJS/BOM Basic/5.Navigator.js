let appname = document.getElementById("cookie")
user = document.getElementById("user")
user = document.getElementById("lan")
user = document.getElementById("onLine")


appname.innerHTML = "cookieEnabled:" + navigator.cookieEnabled
appname.innerHTML = "userAgent :" + navigator.userAgent
appname.innerHTML = "language :" + navigator.language
appname.innerHTML = "OnLine:" + navigator.onLine