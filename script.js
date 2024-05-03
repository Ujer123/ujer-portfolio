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
    $(".form").toggleClass("form_change");
    $("body").toggleClass("change-theme");
});





$.validator.addMethod("letters", function(value, element) {
  return this.optional(element) || value == value.match(/^[a-z0-9A-Z0-9\s-#&()]*$/);
});


$.validator.addMethod("emailtest", function(value, element) {
  return this.optional(element) || /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(value);
});

$(document).ready(function(){
  $("#submit_form").validate({
     rules: {
              username: {
                  required: true,
                  minlength: 3,
                  maxlength: 35,
                  letters: true
              },
              mobileno: {
                  required: true,
                  minlength: 10,
                  maxlength: 10,
                  digits: true
              },
              emailid: {
                  emailtest: true,
                  required: true,
                  email: true
              },
          },

          messages: {
              username: {
                  required: "username field is required",
                  letters: "Must character only",
                  maxlength: "Please enter 35 Characters only"
              },
              emailid: {
                  required: "email field is required",
                  email: "Please enter a valid email id",
                  emailtest: "Please enter a valid email address"
              },
              mobileno: {
                  digits: "Please enter a valid mobile number",
                  minlength: "Please enter 10 digits only",
                  maxlength: "Please enter 10 digits only"
              },
          }
  });
});
