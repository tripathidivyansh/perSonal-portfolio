document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      alert('Thanks! Your message has been sent. 😊');
      this.reset();
    }, (error) => {
      alert('Oops! Something went wrong...', error.text);
    });
});
