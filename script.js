document.addEventListener('DOMContentLoaded', () => {
    const forgiveButton = document.getElementById('forgive-button');
    const alrightButton = document.getElementById('alright-button');

    const redirectToDancePage = () => {
        window.location.href = 'dance.html';
    };

    forgiveButton.addEventListener('click', redirectToDancePage);
    alrightButton.addEventListener('click', redirectToDancePage);
});
