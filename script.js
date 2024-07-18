document.addEventListener('DOMContentLoaded', function() {
    const greetButton = document.getElementById('greet-button');
    const greetingMessage = document.getElementById('greeting-message');

    greetButton.addEventListener('click', function() {
        greetingMessage.textContent = 'Hello, Tuyet! Welcome to your personal webpage!';
    });

    const openChatButton = document.getElementById('open-chat-button');
    const chatContainer = document.getElementById('chat-widget-container');
    const closeButton = document.getElementById('close-chat-button');
    const chatWithUsButton = document.getElementById('chat-with-us-button');

    openChatButton.addEventListener('click', toggleChatWidget);
    closeButton.addEventListener('click', toggleChatWidget);
    chatWithUsButton.addEventListener('click', showChatWidget);

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (chatContainer.classList.contains('open')) {
                chatContainer.classList.remove('open');
            }
        }
    });
});

// Function to toggle chat widget visibility
function toggleChatWidget() {
    var chatWidget = document.getElementById('chat-widget-container');
    if (chatWidget.style.display === 'none' || chatWidget.style.display === '') {
        chatWidget.style.display = 'block';
    } else {
        chatWidget.style.display = 'none';
    }
}

// Event listener for ESC key press to close chat widget
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        var chatWidget = document.getElementById('chat-widget-container');
        chatWidget.style.display = 'none';
    }
});
