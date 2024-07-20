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
//

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
    // Get elements for articles
    const postArticleButton = document.getElementById('post-article-button');
    const titleInput = document.getElementById('title-input');
    const articleInput = document.getElementById('article-input');
    const articleList = document.getElementById('article-list');

    // Get elements for achievements
    const postAchievementButton = document.getElementById('post-achievement-button');
    const achievementTitleInput = document.getElementById('achievement-title');
    const achievementInput = document.getElementById('achievement-input');
    const achievementImageInput = document.getElementById('achievement-image');
    const achievementList = document.getElementById('achievement-list-ul');

    // Load articles and achievements from LocalStorage
    loadArticles();
    loadAchievements();

    // Add event listener to the post article button
    postArticleButton.addEventListener('click', function() {
        const articleTitle = titleInput.value.trim();
        const articleText = articleInput.value.trim();

        if (articleTitle && articleText) {
            addArticle(articleTitle, articleText);
            saveArticle(articleTitle, articleText);

            titleInput.value = '';
            articleInput.value = '';
        }
    });

    // Add event listener to the post achievement button
    postAchievementButton.addEventListener('click', function() {
        const achievementTitle = achievementTitleInput.value.trim();
        const achievementText = achievementInput.value.trim();
        const imageFile = achievementImageInput.files[0];

        if (achievementTitle && achievementText) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageSrc = e.target.result;
                addAchievement(achievementTitle, achievementText, imageSrc);
                saveAchievement(achievementTitle, achievementText, imageSrc);

                achievementTitleInput.value = '';
                achievementInput.value = '';
                achievementImageInput.value = '';
            };
            if (imageFile) {
                reader.readAsDataURL(imageFile);
            } else {
                reader.onload(); // For no image scenario
            }
        }
    });

    // Function to save articles to LocalStorage
    function saveArticle(title, text) {
        let articles = JSON.parse(localStorage.getItem('articles')) || [];
        if (!articles.some(article => article.title === title && article.text === text)) {
            articles.push({ title, text });
            localStorage.setItem('articles', JSON.stringify(articles));
        }
    }

    // Function to load articles from LocalStorage and display them
    function loadArticles() {
        let articles = JSON.parse(localStorage.getItem('articles')) || [];
        articles.forEach(({ title, text }) => {
            addArticle(title, text);
        });
    }

    // Function to add article to the DOM
    function addArticle(title, text) {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
            <h3>${title}</h3>
            <p>${text}</p>
            <button class="delete-button">Delete</button>
        `;
        articleList.appendChild(articleElement);
        addDeleteEventListener(articleElement.querySelector('.delete-button'));
    }

    // Function to add delete event listener to a button
    function addDeleteEventListener(button) {
        button.addEventListener('click', function() {
            const articleElement = this.parentElement;
            const articleTitle = articleElement.querySelector('h3').innerText;
            const articleText = articleElement.querySelector('p').innerText;

            articleElement.remove();
            removeArticle(articleTitle, articleText);
        });
    }

    // Function to remove an article from LocalStorage
    function removeArticle(title, text) {
        let articles = JSON.parse(localStorage.getItem('articles')) || [];
        articles = articles.filter(article => article.title !== title || article.text !== text);
        localStorage.setItem('articles', JSON.stringify(articles));
    }

    // Function to save achievements to LocalStorage
    function saveAchievement(title, text, imageSrc) {
        let achievements = JSON.parse(localStorage.getItem('achievements')) || [];
        if (!achievements.some(achievement => achievement.title === title && achievement.text === text && achievement.imageSrc === imageSrc)) {
            achievements.push({ title, text, imageSrc });
            localStorage.setItem('achievements', JSON.stringify(achievements));
        }
    }

    // Function to load achievements from LocalStorage and display them
    function loadAchievements() {
        let achievements = JSON.parse(localStorage.getItem('achievements')) || [];
        achievements.forEach(({ title, text, imageSrc }) => {
            addAchievement(title, text, imageSrc);
        });
    }

    // Function to add achievement to the DOM
    function addAchievement(title, text, imageSrc) {
        const achievementElement = document.createElement('li');
        achievementElement.classList.add('achievement-item');
        achievementElement.innerHTML = `
            <h3>${title}</h3>
            <p>${text}</p>
            ${imageSrc ? `<img src="${imageSrc}" alt="Achievement Image" />` : ''}
            <button class="like-button">Like</button>
            <button class="comment-button">Comment</button>
            <button class="delete-button">Delete</button>
        `;
        achievementList.appendChild(achievementElement);
        addAchievementEventListeners(achievementElement);
    }

    // Function to add event listeners to achievement buttons
    function addAchievementEventListeners(element) {
        const deleteButton = element.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {
            const parentElement = this.parentElement;
            const title = parentElement.querySelector('h3').innerText;
            const text = parentElement.querySelector('p').innerText;
            const imageSrc = parentElement.querySelector('img') ? parentElement.querySelector('img').src : null;

            parentElement.remove();
            removeAchievement(title, text, imageSrc);
        });

        const likeButton = element.querySelector('.like-button');
        likeButton.addEventListener('click', function() {
            alert('You liked this achievement!');
        });

        const commentButton = element.querySelector('.comment-button');
        commentButton.addEventListener('click', function() {
            const comment = prompt('Enter your comment:');
            if (comment) {
                const commentElement = document.createElement('p');
                commentElement.classList.add('comment');
                commentElement.innerText = comment;
                element.appendChild(commentElement);
            }
        });
    }

    // Function to remove an achievement from LocalStorage
    function removeAchievement(title, text, imageSrc) {
        let achievements = JSON.parse(localStorage.getItem('achievements')) || [];
        achievements = achievements.filter(achievement => 
            achievement.title !== title || 
            achievement.text !== text || 
            achievement.imageSrc !== imageSrc
        );
        localStorage.setItem('achievements', JSON.stringify(achievements));
    }
});

