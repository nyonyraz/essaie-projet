document.addEventListener("DOMContentLoaded", function() {
    const giftBox = document.getElementById('giftBox');
    const contentSection = document.getElementById('content');
    const message = document.getElementById('message');

    // Lorsque l'utilisateur clique sur la boîte
    giftBox.addEventListener('click', function() {
        // Afficher le contenu caché
        contentSection.classList.remove('hidden');
        message.classList.add('hidden');
    });
});