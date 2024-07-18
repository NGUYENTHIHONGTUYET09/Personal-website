document.addEventListener('DOMContentLoaded', function() {
    const chatWidgetButton = document.getElementById('chat-widget-button');
    const chatWidgetContainer = document.getElementById('initial-chat-widget');
    const closeButton = document.querySelector('.close-button');
    const sendMessageButton = document.getElementById('send-message-button');
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');

    chatWidgetButton.addEventListener('click', function() {
        chatWidgetContainer.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        chatWidgetContainer.style.display = 'none';
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            chatWidgetContainer.style.display = 'none';
        }
    });

    sendMessageButton.addEventListener('click', function() {
        const message = messageInput.value.trim();

        if (message !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'sent');
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);

            // Clear input after sending message
            messageInput.value = '';
        }
    });
});


    // Bổ sung các chức năng khác tại đây nếu cần

document.addEventListener('DOMContentLoaded', function() {
    const greetButton = document.getElementById('greet-button');
    const greetingMessage = document.getElementById('greeting-message');

    greetButton.addEventListener('click', function() {
        greetingMessage.textContent = 'Hello! Welcome to my webpage!';
    });
});
