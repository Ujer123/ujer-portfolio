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


$(document).ready(function() {
    $('#submit_form').submit(function(e) {
      e.preventDefault(); // Prevent form submission
  
      // Get form data
      var formData = {
        username: $('#name').val(),
        emailid: $('#email').val(),
        mobileno: $('#mobile').val(),
        subject: $('#subject').val(),
        message: $('#message').val()
      };
  
      // Send form data to Formspree
      $.ajax({
        type: 'POST',
        url: 'https://formspree.io/ujermohd0@gmail.com',
        data: formData,
        dataType: 'json',
        success: function(data) {
          alert('Message sent successfully!');
          $('#name').val('');
          $('#email').val('');
          $('#mobile').val('');
          $('#subject').val('');
          $('#message').val('');
        },
        error: function(xhr, status, error) {
          console.error(xhr.responseText);
          alert('Failed to send message. Please try again later.');
        }
      });
    });
  });

  $(".form-check-input").click(function(){
    $("h1, h2, p, h3, i, h5").toggleClass("textchange");
    $("body").toggleClass("change-theme");
});


