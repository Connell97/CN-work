const keycode = document.querySelector("#keycode p");
const key = document.querySelector("#key .info");
const keyLocation = document.querySelector("#location .info");
const which = document.querySelector("#which .info");
const code = document.querySelector("#code .info");
const intro = document.querySelector("#intro-container");

if (intro.classList.contains("hide") == false) {
    document.addEventListener("keypress", ()=> {
        intro.classList.add("hide");
})};

/*document.addEventListener("keypress", printKey => {
    code.textContent = `${printKey}`;
})*/

document.addEventListener("keydown", event => {
    keycode.innerHTML = event.keyCode;
    if (event.keyCode == 32) {
        key.innerHTML = "Space";
    }
    else {
        key.innerHTML = event.key;
    }
    keyLocation.innerHTML = event.location;
    which.innerHTML = event.which;
    code.innerHTML = event.code;
})