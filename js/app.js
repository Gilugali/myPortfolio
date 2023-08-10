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
}