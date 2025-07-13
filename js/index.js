var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var userData = []

if (localStorage.getItem('users') !== null) {
    userData = JSON.parse(localStorage.getItem('users'))
}

function signUp() {

    if (isSignupEmpty() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-2">All inputs is required</span>'
        return false
    }
    var userinfo = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
    }
    if (userData.length == 0) {
        userData.push(userinfo)
        console.log(userData);
        localStorage.setItem('users', JSON.stringify(userData))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        clear()
        return true
    }

    if (ifEmailExist()) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'
    } else {
        userData.push(userinfo)
        console.log(userData);
        localStorage.setItem('users', JSON.stringify(userData))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        clear()
    }
}
//clear input fields
function clear() {
    signupName.value = null
    signupEmail.value = null
    signupPassword.value = null
}
//check if input fields are empty
function isSignupEmpty() {
    if (signupName.value == "" && signupEmail.value == "" && signupPassword.value == "") {
        return false
    }
    else
        return true
}
//check for repeated emails
function ifEmailExist() {
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return true
        }
    }
}

//====================================================================================================================

function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return true
    } else {
        return false
    }
}


var pathparts = location.pathname.split('/');
var baseURL = ''
for (var i = 0; i < pathparts.length - 1; i++) {
    baseURL += '/' + pathparts[i]
}






function Login() {

    if (isLoginEmpty()) {
        document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        return false
    }
    var email = signinEmail.value
    var password = signinPassword.value

    for (let i = 0; i < userData.length; i++) {

        if (userData[i].email.toLowerCase() == email.toLowerCase() && userData[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername', userData[i].name)
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-success">correct</span>'
            var base = location.origin + location.pathname.substring(0, location.pathname.lastIndexOf('/'));

            location.replace(base + '/home.html');
        }
        else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }
}


function logout() {
    localStorage.removeItem('sessionUsername')
}


