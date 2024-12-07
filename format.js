// script.js

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');

    // Função para mostrar o pop-up
    function showPopup() {
        popup.style.display = 'block';
    }

    // Função para ocultar o pop-up
    function hidePopup() {
        popup.style.display = 'none';
    }

    // Mostrar o pop-up quando a página carregar
    showPopup();

    // Fechar o pop-up quando o botão de fechar for clicado
    closePopupButton.addEventListener('click', hidePopup);

    // Fechar o pop-up se o usuário clicar fora do conteúdo do pop-up
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            hidePopup();
        }
    });
});
