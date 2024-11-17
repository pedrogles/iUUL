// Form inputs
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

// Form
const contactForm = document.getElementById('contact-form');

// Form Submit Event
contactForm.addEventListener('submit', _ => {
    if(localStorage.getItem('messages')) {
        // adiciona item a lista já existente de mensagens
        const messageList = JSON.parse(localStorage.getItem('messages'));
        const lastId = messageList[messageList.length - 1].id;

        const formData = {
            id: lastId + 1,
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        };

        messageList.push(formData);

        localStorage.setItem('messages', JSON.stringify(messageList));
        contactForm.reset();
    } else { 
        // cria uma nova lista de mensagens
        const formData = {
            id: 1,
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        };

        const messageList = [formData];

        localStorage.setItem('messages', JSON.stringify(messageList));
        contactForm.reset();
    };
});