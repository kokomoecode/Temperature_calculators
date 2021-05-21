"use strict";
window.onload = function () {

    const cvnBtn = document.getElementById("cvnBtn");
    cvnBtn.onclick = cvnBtnClicked;
}

function cvnBtnClicked() {
    const fahrenheitField = document.getElementById("fahrenheit");
    let fahrenheit = Number(fahrenheitField.value);

    let celsius = (fahrenheit - 32) * (5 / 9);
    let message = celsius.toFixed(2) + " Degree"

    const messageField = document.getElementById("message");
    messageField.value = message;
}
