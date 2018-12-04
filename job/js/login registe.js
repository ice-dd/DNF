function checktext() {

    var text = document.getElementById("text");
    var span = document.getElementById("warn1");

    if (text.value == " ") {
        span.innerText = "用户名不能为空！";
    } else if (text.value.length < 3) {
        span.innerText = "用户名不能小于3位！";
    } else {
        span.innerText = "";
    }
}


function checkpassword1() {

    var span = document.getElementById("warn2");
    var passwrod1 = document.getElementById("passwrod1");

    if (passwrod1.value == "") {
        span.innerText = "密码不能为空";
    } else if (passwrod1.value.length < 6) {
        span.innerText = "密码不能小于6位";
    } else {
        span.innerText = "";
    }
}


function checkpassword2() {

    var span = document.getElementById("warn3");
    var passwrod1 = document.getElementById("passwrod1");
    var passwrod2 = document.getElementById("passwrod2");

    if (passwrod2.value == "") {
        span.innerHTML = "密码不能为空";
    } else if (passwrod1.value != passwrod2.value) {
        span.innerHTML = "两次密码不相同";
    } else {
        span.innerText = "";
    }
}

function check() {

    var span1 = document.getElementById("warn1");
    var span2 = document.getElementById("warn2");
    var span3 = document.getElementById("warn3");

    if (span1.innerText == "" && span2.innerText == "" && span3.innerText == "") {
        alert("注册失败");
    } else {
        alert("注册成功");
    }
}


function clea() {

    var text = document.getElementById("text");
    var passwrod1 = document.getElementById("passwrod1");
    var passwrod2 = document.getElementById("passwrod2");

    text.value = "";
    passwrod1.value = "";
    passwrod2.value = "";
}

function login() {

}