// Form inputs
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

// Form
const contactForm = document.getElementById('contact-form');

// Form Submit Event
contactForm.addEventListener('submit', _ => {
    const formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    };

    const JsonFormData = JSON.stringify(formData);

    localStorage.setItem(email.value, JsonFormData);

    contactForm.reset();
});