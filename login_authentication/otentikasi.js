function login() {
    var username = "assaufianggie@gmail.com"
    var password = "love4"

    var username_1 = document.getElementById('username').value;
    var password_1 = document.getElementById('password').value;

    if(username_1 == username && password_1 == password){
        alert("success")
        window.location.href="success.html"
    }
    else{
        alert('Login Invalid');
    }

}