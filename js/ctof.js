"use strict";
window.onload = function () {
    const toyota = document.getElementById("toyota");
    toyota.onclick = toyotaClicked;

}


function toyotaClicked() {
    const celsiusField = document.getElementById("celsius");
    let celsius = Number(celsiusField.value);

    let fahrenheit = (celsius * (9/5)) + 32;
    let message = fahrenheit.toFixed(2) + " Degree"

    const messageField = document.getElementById("message");
    messageField.value = message;

}