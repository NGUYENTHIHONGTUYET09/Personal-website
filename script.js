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


// khung đăng bài ---------------------------------
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const postArticleButton = document.getElementById('post-article-button');
    const articleInput = document.getElementById('article-input');
    const articleList = document.getElementById('article-list');

    // Load articles from LocalStorage
    loadArticles();

    // Add event listener to the post article button
    postArticleButton.addEventListener('click', function() {
        const articleText = articleInput.value.trim();

        if (articleText) {
            // Create a new article element
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');
            articleElement.innerHTML = `
                <h3>Article ${Date.now()}</h3>
                <p>${articleText}</p>
                <button class="delete-button">Delete</button>
            `;

            // Add the new article to the article list
            articleList.appendChild(articleElement);

            // Save the article to LocalStorage
            saveArticle(articleText);

            // Clear the input field
            articleInput.value = '';

            // Add event listener to the delete button
            addDeleteEventListener(articleElement.querySelector('.delete-button'));
        }
    });

    // Function to save articles to LocalStorage
    function saveArticle(articleText) {
        // Get existing articles from LocalStorage
        let articles = JSON.parse(localStorage.getItem('articles')) || [];

        // Add new article to the list
        articles.push(articleText);

        // Save the updated list back to LocalStorage
        localStorage.setItem('articles', JSON.stringify(articles));
    }

    // Function to load articles from LocalStorage and display them
    function loadArticles() {
        // Get articles from LocalStorage
        let articles = JSON.parse(localStorage.getItem('articles')) || [];

        // Add each article to the article list
        articles.forEach(articleText => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');
            articleElement.innerHTML = `
                <h3>Article ${Date.now()}</h3>
                <p>${articleText}</p>
                <button class="delete-button">Delete</button>
            `;
            articleList.appendChild(articleElement);

            // Add event listener to the delete button
            addDeleteEventListener(articleElement.querySelector('.delete-button'));
        });
    }

    // Function to add delete event listener to a button
    function addDeleteEventListener(button) {
        button.addEventListener('click', function() {
            const articleElement = this.parentElement;
            const articleText = articleElement.querySelector('p').innerText;

            // Remove the article from the DOM
            articleElement.remove();

            // Remove the article from LocalStorage
            removeArticle(articleText);
        });
    }

    // Function to remove an article from LocalStorage
    function removeArticle(articleText) {
        // Get existing articles from LocalStorage
        let articles = JSON.parse(localStorage.getItem('articles')) || [];

        // Remove the article from the list
        articles = articles.filter(article => article !== articleText);

        // Save the updated list back to LocalStorage
        localStorage.setItem('articles', JSON.stringify(articles));
    }
});

//-------------------------------------------------
