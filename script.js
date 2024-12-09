// toggle menu icon between lines and x
let menuBar = document.querySelector('#menuBar');
let navBar = document.querySelector('.navBar');

menuBar.onclick = () => {
    menuBar.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}


// Changes highlighted section in navigation Bar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
            })
        }
    })
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}
