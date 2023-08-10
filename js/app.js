let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}




const section = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
     section.forEach((sec)=>{
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let heihgt = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top <offset +heihgt){
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id +']').classList.add('active') 
            })
        }
    })

    // sticky navabar 
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

}


ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200 
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' })
ScrollReveal().reveal('.home-img,.services-container, .porfolio-box, .contact form', { origin: 'bottom' })
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' })
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' })

const typed = new Typed('.multiple-text', {
    strings:['frontend Developer', 'pianist', 'Backend Developer', 'fullstack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

