$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 7000,    // Espera 7 segundos antes de cambiar
    autoplaySpeed: 2000,      // La transición dura 2 segundos
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

// Reiniciar autoplay cuando se hace clic en las flechas de navegación
$('.owl-carousel .owl-nav button').on('click', function () {
    $('.owl-carousel').trigger('stop.owl.autoplay'); // Detener autoplay
    $('.owl-carousel').trigger('play.owl.autoplay', [7000]); // Reiniciar autoplay con 7 segundos
});