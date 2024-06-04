humberger=document.querySelector('.nav-toggle');
navToggleClose = document.getElementById('nav-toggle-close');
humberger.onclick=function(){
    navbar=document.querySelector('.nav-links');
    navbar.classList.toggle("active");
    humberger.classList.toggle('show-icon');
}

navToggleClose.addEventListener('click', () => {
    navbar.classList.remove('active');
});
