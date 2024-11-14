const badge = document.getElementById('message-badge');

function messagesBagde() {
    if(localStorage.length > 0) {
        badge.style.display = "block"
        badge.innerText = localStorage.length;
    };
};

messagesBagde();