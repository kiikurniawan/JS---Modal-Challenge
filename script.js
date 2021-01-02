'use strict';

const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function showModal() { 
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal() { 
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnShowModal.length; i++) 
    btnShowModal[i].addEventListener('click', showModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) { 
    console.log(modal.classList.contains('hidden'));
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
        closeModal();
})




