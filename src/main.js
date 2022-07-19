const navIcon = document.getElementById('nav-icon')
const mainNav = document.getElementById('main-nav')
const headerImg = document.getElementById('header-img')
const dropdown = document.querySelectorAll('.dropdown-content')
const navLinks = document.querySelectorAll('.nav-link')

const video = document.querySelector('.video')
const sticky = mainNav.offsetTop
let scrolled = false
window.onscroll = () => scrollHandler();



const scrollHandler = (e) => {   
    if(window.scrollY >= sticky){
        //fixed scrollbar
        mainNav.classList.add('fixed')
        //header Logo shrink
        headerImg.classList.add('header-img-margin')
        //fix dropdown
        dropdown.forEach(menu=>menu.classList.add('no-bottom'))
    } else {
        headerImg.classList.remove('header-img-margin')
        mainNav.classList.remove('fixed')
        dropdown.forEach(menu=>menu.classList.remove('no-bottom'))
    }
}

const openNav = (test) => {
    if(mainNav.classList.value == 'fixed' && test )  {
        mainNav.classList.add('responsive')
        navIcon.classList.remove('fa-bars')
        navIcon.classList.add('fa-times')
    } else if(!mainNav.classList.value && test) {
        mainNav.classList.add('responsive')
        navIcon.classList.remove('fa-bars')
        navIcon.classList.add('fa-times')
        if(window.scrollY<425){
            scrolled =425 - window.scrollY;

            window.scrollBy({
                top: scrolled,
                left: 0,
                behavior: "smooth"
            })
        }
    } else {
        mainNav.classList.remove('responsive')
        navIcon.classList.remove('fa-times')
        navIcon.classList.add('fa-bars')
        if(scrolled){
            window.scrollBy({
                top: -scrolled,
                left: 0,
                behavior: 'smooth'
            })
            scrolled = false;
        }
    }
}

window.onload = ()=> {
    
}
