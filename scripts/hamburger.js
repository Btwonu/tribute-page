//Declarations
const overlay = document.getElementById('overlay');
const hamburgerBtn = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');
const hamburgerItems = document.querySelectorAll('.hamburger-item');

//On hamburger click
hamburgerBtn.addEventListener('click', toggleMenu);
//On window resize
window.addEventListener('resize', closeSidebar);

//Declarations
function toggleMenu() {
  //Toggle hamburger items
  Array.from(hamburgerItems).forEach((menuItem) => {
    menuItem.classList.toggle('open');
  });

  //Toggle sidebar
  sidebar.classList.toggle('open');
  //Toggle overlay
  overlay.classList.toggle('visibility-visible');
}

//If the screen is larger than what is needed to display the hamburger menu and
//the menu is opened - close it.
function closeSidebar() {
  if (window.innerWidth > 640 && sidebar.classList.contains('open')) {
    toggleMenu();
  }
}
