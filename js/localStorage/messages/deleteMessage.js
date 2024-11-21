export const deleteMessage = (id) => {
    if(confirm('Você realmente deseja deletar essa mensagens?')) {
        const messages = JSON.parse(localStorage.getItem('messages'));
        if(messages.length === 1) {
            localStorage.removeItem('messages');
            location.reload();
        } else {
            const messagesFiltered = messages.filter(message => message.id !== id + 1);
            localStorage.setItem('messages', JSON.stringify(messagesFiltered));
            location.reload();
        };
    };
};