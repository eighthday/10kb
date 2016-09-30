

var menuBtns

var active = document.getElementById('active')
active.innerHTML = "England"

var menu = document.getElementById('menu')


document.getElementById('menu-toggle').addEventListener('click', function(e) {

  menu.className = " show";
}, false);

menuBtns = menu.getElementsByTagName('a');

for (var i = 0; i < menuBtns.length; i++) {
  menuBtns[i].addEventListener('click', setActive, false);
}

function setActive() {
  active.innerHTML = this.innerHTML;
  menu.className = " hide";
}
