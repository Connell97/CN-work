const keycode = document.querySelector("#keycode");
const key = document.querySelector("#key");
const keyLocation = document.querySelector("#location");
const which = document.querySelector("#which");
const code = document.querySelector("#code");
const intro = document.querySelector("#intro-container");

if (intro.classList.contains("hide") == false) {
    document.addEventListener("keypress", ()=> {
        intro.classList.add("hide");
})};