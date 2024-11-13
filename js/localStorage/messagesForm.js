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
})

// Get all storage items
for(let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(localStorage.getItem(key))
};