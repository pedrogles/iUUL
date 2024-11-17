const badge = document.getElementById('message-badge');

function messagesBagde() {
    const messageList = JSON.parse(localStorage.getItem('messages'));
    if(messageList && messageList.length > 0) {
        badge.style.display = "block";
        badge.innerText = messageList.length;
    };
};

messagesBagde();