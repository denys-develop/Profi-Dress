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
