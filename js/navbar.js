/***********************************************
 *Copyright 2021 - Chris Williamson
 *NO BS libraries under open source license
 *All I ask is give credit where credit is due.
 *You may use this for personal or commercial
 ************************************************/

const navBar = document.getElementById('navbar');
const respMenu = document.getElementById('respMenu');
const navLinks = document.getElementById('navLinks');

respMenu.addEventListener('click', () => {

    const navOpen = navLinks.style.display;

    if (navOpen === "") {
        navLinks.style.display = "flex";
        navBar.setAttribute('class', 'active');
    } else {
        navLinks.style.display = "";
        navBar.setAttribute('class', 'inactive');
    }

});

const li = document.getElementById('navbar').getElementsByTagName('ul');

for (let i = 0; i < li.length;) {
    li[i].addEventListener('click', () => {
        navLinks.style.display = "none";
        navBar.setAttribute('class', 'inactive');
    });
    ++i
}

function menu(name) {
    const li = document.createElement('li');
    const lk = document.createElement('a');
    lk.setAttribute('href', `${name}.html`);
    lk.innerText = name.toUpperCase();

    navLinks.appendChild(li);
    li.appendChild(lk);
}

menu("about");
menu("services");
menu("portfolio");
menu("contact us");