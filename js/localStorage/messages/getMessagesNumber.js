const span = document.querySelector('.messages-number');

function getMessageNumber() {
    const messages = JSON.parse(localStorage.getItem('messages'));
    if(messages && messages.length > 0) {
        span.innerText = messages.length;
    } else span.innerText = 0;
};

getMessageNumber();