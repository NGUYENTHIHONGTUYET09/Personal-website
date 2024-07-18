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

//hiển thị thông báo tin nhắn
// Event listener for sending messages
document.getElementById('send-message-button').addEventListener('click', function() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value.trim(); // Lấy nội dung tin nhắn và loại bỏ khoảng trắng thừa

    if (message !== '') {
        var chatMessages = document.getElementById('chat-messages');
        var messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);

        // Hiển thị thông báo rằng tin nhắn đã được gửi
        alert('Message sent: ' + message);

        // Xóa nội dung trong input sau khi gửi
        messageInput.value = '';
    }
});

//hiển thị thông báo
// Example JavaScript for notification functionality
document.getElementById('notification-icon').addEventListener('click', function() {
    // Đưa ra hành động khi người dùng nhấp vào icon chuông
    alert('Notification icon clicked!');
    // Thêm các hành động khác tại đây nếu cần
});
