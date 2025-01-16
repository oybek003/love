function revealMessage() {
    const message = document.querySelector('.hidden-message');
    const button = document.querySelector('.reveal-btn');
    message.style.display = 'block';
    button.style.display = 'none';
}