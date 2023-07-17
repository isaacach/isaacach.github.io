import { EMAILJS_KEY, EMAIL_SERVICE_ID } from '/keys.js';

(function() {
  emailjs.init(EMAILJS_KEY);
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm(EMAIL_SERVICE_ID, 'contact_form', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}
