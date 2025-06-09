const swiper = new Swiper('.work-carsouel .swiper-container', {
    loop: true, 
    slidesPerView: 'auto',
    spaceBetween: 10, 
    centeredSlides: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}); 