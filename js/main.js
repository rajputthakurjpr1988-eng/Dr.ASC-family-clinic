// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.primary');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // Appointment form -> composes a WhatsApp message to the clinic
  var apptForm = document.getElementById('appointment-form');
  if (apptForm) {
    apptForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var date = document.getElementById('date').value;
      var time = document.getElementById('time').value;
      var reason = document.getElementById('reason').value.trim();

      var message = 'Hello, I would like to book an appointment.%0A' +
        'Name: ' + encodeURIComponent(name) + '%0A' +
        'Phone: ' + encodeURIComponent(phone) + '%0A' +
        'Preferred date: ' + encodeURIComponent(date || 'Not specified') + '%0A' +
        'Preferred time: ' + encodeURIComponent(time || 'Not specified') + '%0A' +
        'Reason for visit: ' + encodeURIComponent(reason || 'Not specified');

      var whatsappUrl = 'https://wa.me/918619956585?text=' + message;

      var confirmBox = document.getElementById('appt-confirm');
      if (confirmBox) confirmBox.classList.add('show');

      window.open(whatsappUrl, '_blank');
    });
  }

  // Contact form -> opens default mail app with prefilled message
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('c-name').value.trim();
      var phone = document.getElementById('c-phone').value.trim();
      var msg = document.getElementById('c-message').value.trim();

      var body = 'Name: ' + name + '%0APhone: ' + phone + '%0A%0A' + encodeURIComponent(msg);
      var mailto = 'mailto:?subject=' + encodeURIComponent('Enquiry from clinic website') + '&body=' + body;

      var confirmBox = document.getElementById('contact-confirm');
      if (confirmBox) confirmBox.classList.add('show');

      window.location.href = mailto;
    });
  }
});
