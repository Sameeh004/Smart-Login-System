//for authentication
var username = localStorage.getItem('sessionUsername')
if (username == null) {
    location.replace('https://' + location.hostname + '/index.html')
}

document.getElementById('username').innerHTML= "Welcome " + username
