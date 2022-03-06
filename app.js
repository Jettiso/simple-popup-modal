const modalBtn = document.getElementById('modalBtn');
const modal = document.querySelector('.modal');

modalBtn.addEventListener('click', () => {
    modal.classList.add('show');
})