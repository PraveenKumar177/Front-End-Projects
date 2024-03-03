var btn = document.getElementsByClassName("btn")[0];
var navbar = document.getElementsByClassName('navbar-links')[0];

btn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
});
