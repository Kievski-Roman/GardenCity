new Swiper('.info-slider', {
    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',

    },
    slidesPerView: 3,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        900: {
            slidesPerView: 2,
        },
        1261: {
            slidesPerView: 3,
        },
    }
});
new Swiper('.img-slider', {
    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
    },
    slidesPerView: 4,
    loop: true,
    spaceBetween: 45,
    centeredSlides: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1261: {

            slidesPerView: 4,
        },
    }
});
let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('_lock');
})
