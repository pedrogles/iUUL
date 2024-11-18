const button = document.getElementById('delete-all');

button.addEventListener('click', () => {
    if(confirm('Você realmente deseja deletar todas as mensagens?')) {
        localStorage.clear();
        location.reload();
    };
});