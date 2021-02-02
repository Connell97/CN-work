const input = document.querySelector('#input');
const button = document.querySelector('#submit');
const showHideBtn = document.querySelector('#show-hide-btn');
const remItmBtn = document.querySelector('#remove');
const listItems = document.querySelectorAll("li");

const list = document.querySelector("#list");


list.addEventListener("mouseover", (event) =>{
    if (event.target.tagName === "LI") {
    event.target.textContent = event.target.textContent.toUpperCase();
    }
});
list.addEventListener("mouseout", (event) =>{
    if (event.target.tagName === "LI") {
    event.target.textContent = event.target.textContent.toLowerCase();
    }
});

button.addEventListener("click", ()=> {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    // list.addEventListener("mouseover", (event) =>{
    //     event.target.textContent = event.target.textContent.toUpperCase();
    // });
    // list.addEventListener("mouseout", (event) =>{
    //     event.target.textContent = event.target.textContent.toLowerCase();
    // });
    console.log(listItem);
    list.appendChild(listItem);
    input.value = "";
})

showHideBtn.addEventListener("click", ()=> {
    if (list.style.display == "none") {
        list.style.display = "block";
        showHideBtn.textContent = "Hide List";
    }
    else {
        list.style.display = "none";
        showHideBtn.textContent = "Show List";
    }
})

remItmBtn.addEventListener("click", ()=> {
    list.removeChild(list.lastChild);
})

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const li = event.target;
        const parent = li.parentNode;
        parent.removeChild(li);
    }
});




/*const showhidebtn = document.getElementById('showhide-btn');

button.addEventListener('click', () => {
    let listItem = document.createElement('li');
    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = '';
})

//challenge cont'd
//show/hide list
//in console, type list.style to find object properties
//then use list.style.display, it will show 'block' so you can show none
showhidebtn.addEventListener("click", () => {
    let list = document.getElementsByTagName('ul')[0];
    if(list.style.display == 'none') {
        list.style.display = 'block';
        showhidebtn.textContent = 'hide';
    } else {
        list.style.display = 'none';
        showhidebtn.textContent = 'show';
    }
})
//inspect the html you can then see inline style as display:"none" added in when button clicked*/
