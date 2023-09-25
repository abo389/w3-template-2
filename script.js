const menu = document.getElementById("menu")
const links = document.getElementById("links")
menu.addEventListener("click" , () => links.classList.toggle("active"))
const mySwiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    autoplay: {
    delay: 2500,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    },
})