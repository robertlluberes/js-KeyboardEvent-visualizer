let key = document.querySelector("#key");

document.addEventListener("keydown", showKeyboardCodeEvent);

function showKeyboardCodeEvent(e) {
    key.innerHTML = e.code;
}