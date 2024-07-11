document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.search_bx .card');

    cards.forEach(card => {
        const inputElement = card.querySelector('input');
        const icon = card.querySelector('.fa-square-caret-down');

        inputElement.addEventListener('input', () => {
            if (inputElement.value.length > 0) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
});
