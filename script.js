ScrollReveal({
    reset: true,
    distance: `80px`,
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.team-title, .home-change, .about-change,  .contact-change', { origin: `top`});
ScrollReveal().reveal('#skills .col-lg-2, .portfolio-p', {interval: 600});
ScrollReveal().reveal('.home img, .services-container,  #contact form textarea', { origin: 'bottom' });
ScrollReveal().reveal('.name, #about img, #contact form', { origin: 'left' });
// ScrollReveal().reveal('.home-change p, .about-change', { origin: 'right' });


const typed = new Typed('.multiple-text',{
    strings: ['Full Stack Web Developer!', 'Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


