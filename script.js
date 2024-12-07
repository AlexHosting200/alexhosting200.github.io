function showAlert() {
    alert("Bienvenue sur AlexHosting ! Commencez votre aventure maintenant.");
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Merci pour votre message, nous vous répondrons bientôt !');
});
