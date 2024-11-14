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
        const messageList = localStorage.getItem('messages');
        const jsonMessageList = JSON.parse(messageList);
        const lastId = jsonMessageList[jsonMessageList.length - 1].id;

        const formData = {
            id: lastId + 1,
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        };

        jsonMessageList.push(formData);

        localStorage.setItem('messages', JSON.stringify(jsonMessageList));
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