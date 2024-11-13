const badge = document.getElementById('message-badge');

function messagesBagde() {
    if(localStorage.length > 0) {
        badge.innerText = localStorage.length;
    } else {
        badge.style.display = "none"
    }
}

messagesBagde();