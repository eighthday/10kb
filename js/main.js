var active = document.getElementById('active')
var menuBtns
var isFirst = false

var menu = document.getElementById('menu')
var isOpen = false
var en = document.getElementById('en-go')


active.innerHTML = "England"
en.className = " active";

document.getElementById('menu-toggle').addEventListener('click', function(e) {

        menu.className = " show";



}, false);

menuBtns = menu.getElementsByTagName('a');

for (var i = 0; i < menuBtns.length; i++) {
    menuBtns[i].addEventListener('click', setActive, false);

}

function setActive() {

    for (var i = 0; i < menuBtns.length; i++) {
        menuBtns[i].className = " "
    }

    active.innerHTML = this.innerHTML;
    this.className = " active"
    closeMenu()
}

function closeMenu() {
    menu.className = " hide";
  
}
