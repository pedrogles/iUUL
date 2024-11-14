const badge = document.getElementById('message-badge');

function messagesBagde() {
    const messageList = localStorage.getItem('messages');
    const jsonMessageList = JSON.parse(messageList);
    if(jsonMessageList.length > 0) {
        badge.style.display = "block";
        badge.innerText = jsonMessageList.length;
    };
};

messagesBagde();