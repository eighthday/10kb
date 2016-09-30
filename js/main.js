var active = document.getElementById('active')
active.innerHTML = "England"
menuBtns = menu.getElementsByTagName('a');
for (var i = 0; i < menuBtns.length; i++) {
  menuBtns[i].addEventListener('click', function() {active.innerHTML = this.innerHTML; }, false);
}
