// Owl Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        margin: 50
    });
});

const owl = $('.owl-carousel');

$('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})


// Modal
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');
const body = document.body;

const modalBany = document.querySelector('[modal-bany]');


// Кнопки открыть модалку
modalButtons.forEach(function(item) {
    item.addEventListener('click', function() {
        const modalId =  this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hide');
        body.classList.add('no-scroll');
        
        // Находим внутри открываемой модалки блок .modal-window и запрещаем ему передавать клики "наверх"
        modal.querySelector('.modal-window').addEventListener('click', function (event) {
            event.stopPropagation();
        });
        
     });
});

// Кнопки закрыть модалку
modalCloseButtons.forEach(function(item) {
    item.addEventListener('click', function() {
        const modal = this.closest('[data-modal]'); 
        modal.classList.add('hide');
    });
    
});

// Закрытие модалок по фейду .fade-block
allModals.forEach(function(item) {
    item.addEventListener('click', function() {
      this.classList.add('hide');
      body.classList.remove('no-scroll');
    });
});


