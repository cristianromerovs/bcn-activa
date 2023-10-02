const swiper = new Swiper('.swiperMain', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const swiperServicio = new Swiper('.swiperServicios', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
    }
});