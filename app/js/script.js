const btnHam = document.querySelector('#btnHam');
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

const body = document.querySelector("body");


btnHam.addEventListener('click', function(){
    //console.log("open ham");

    if (header.classList.contains('open')){ //Close the Menu
        body.classList.remove("noscroll");
        header.classList.remove('open');

        fadeElems.forEach(function(element) {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
    }
    else { //Open the menu and use fade-in
        body.classList.add("noscroll");
        header.classList.add('open');

        fadeElems.forEach(function(element) {
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });

    }
});

