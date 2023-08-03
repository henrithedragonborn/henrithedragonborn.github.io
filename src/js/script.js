/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*========== sticky navbar ==========*/

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
};

/*========== scroll reveal ==========*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 100
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "henriswebadm@gmail.com",
        Password: "FFCB80185DBA245779E3B18FB367E61D87C8",
        To: "henriswebadm@gmail.com",
        From: "henriswebadm@gmail.com",
        ReplyFrom: document.getElementById("email").value,
        Subject: "Mensagem de " + document.getElementById("user").value,
        Body: "Primeiro nome / Apelido : " + document.getElementById("user").value +
            "<br>E-mail: " + document.getElementById("email").value +
            "<br>Telefone: " + document.getElementById("number").value +
            "<br>Assunto / Pacote: " + document.getElementById("subject").value +
            "<br>Mensagem: " + document.getElementById("message").value
    }).then(
        message => alert(message)
    );
}
function redirecionarPagina(pagina) {
    window.location.href = pagina;
}