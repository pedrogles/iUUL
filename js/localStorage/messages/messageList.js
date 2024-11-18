import { capitalizeWords } from '../../utils/captalizeWords.js';
import { deleteMessage } from './deleteMessage.js';

// Mensagens do localStorage
const messagesList = document.getElementById('messages');
// Botão de deletar todas as mensagens
const deleteAllButton = document.getElementById('delete-all');
// Alterando os dados do formato string para objeto do localStorage
const messages = JSON.parse(localStorage.getItem('messages'));

if(!messages) {
    // Se não tiver 'messages' no localStorage
    const li = document.createElement('li');
    li.classList.add('text-center');
    li.innerHTML = "Você não tem nenhuma mensagem.";
    messagesList.appendChild(li);
} else {
    // Se tiver 'messages' no localStorage
    for(let i = 0; i < messages.length; i++) {
        const li = document.createElement('li');
        li.className = "accordion-item";
        li.innerHTML = `
            <h2 class="accordion-header">
                <button    
                    class="accordion-button d-flex gap-3" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#panelsStayOpen-collapse${i}" 
                    aria-expanded="true" 
                    aria-controls="panelsStayOpen-collapse${i}">
                    <span>
                        ${i + 1}.
                    </span> 
                    <span class="d-flex flex-column gap-1">
                        <span class="fs-5">
                            ${capitalizeWords(messages[i]?.name.toLowerCase())}
                        </span>
                        <span >
                            ${capitalizeWords(messages[i]?.subject.toLowerCase())}
                        </span>
                    </span>
                </button>
            </h2>
            <div id="panelsStayOpen-collapse${i}" class="accordion-collapse collapse">
                <div class="accordion-body d-flex flex-column gap-3">
                    <div class="d-flex flex-row gap-2">
                        <p class="fw-normal">Nome:</p>
                        <p class="fw-light">${capitalizeWords(messages[i]?.name.toLowerCase())}</p>
                    </div>
                    <div class="d-flex flex-row gap-2">
                        <p class="fw-normal">E-mail:</p>
                        <p class="fw-light">${messages[i]?.email.toLowerCase()}</p>
                    </div>
                    <div class="d-flex flex-row gap-2">
                        <p class="fw-normal">Assunto:</p>
                        <p class="fw-light">${capitalizeWords(messages[i]?.subject.toLowerCase())}</p>
                    </div>
                    <div class="d-flex flex-column gap-2">
                        <p class="fw-normal">Mensagem:</p>
                        <p class="fw-light">${messages[i]?.message}</p>
                    </div>
                    <button class="btn btn-danger" type="button">Deletar mensagen</button>
                </div>
            </div>`;
        // Botão de deletar mensagem
        const deleteButton = li.querySelector('.btn-danger');
        // Evento de deletar mensagem
        deleteButton.addEventListener('click', () => deleteMessage(i));
        // Mostrando em tela o botão de deletar todas as mensagens
        deleteAllButton.classList.remove('d-none');
        // Adicionando item a lista
        messagesList.appendChild(li);
    };
};

