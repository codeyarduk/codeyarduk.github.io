document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const arrowIcon = question.querySelector('.arrow-icon');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            arrowIcon.src = '/resources/icons/arrow-pointing-down.svg'; // Change to down arrow
        } else {
            answer.style.display = 'block';
            arrowIcon.src = '/resources/icons/arrow-pointing-up.svg'; // Change to up arrow
        }
    });
});
