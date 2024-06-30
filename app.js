let menuButton = document.getElementById('menu-icon');
let navItemBox = document.getElementById('navitems');
console.log(menuButton);

menuButton.addEventListener('click', () => {
    navItemBox.style.display = 'block';
    
});
