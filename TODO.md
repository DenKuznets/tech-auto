Слайдер на Секцию с Сертификами.(используй swiper)
Мобильное меню
Анимация(используй туже что и в тестовом задании)

https://www.figma.com/file/4yexP5H8H2ysH2t9mRU4uA/%D0%A2%D0%B5%D1%85%D0%90%D0%B2%D1%82%D0%BE?node-id=0-1&t=l0tjJNwpZa4F6pDm-0



Михаил АлексМедиа, [4/6/2023 5:59 PM]
и сертификаты сделай слайдером swiper

Михаил АлексМедиа, [4/6/2023 6:04 PM]
import Swiper, {Autoplay, Navigation} from 'swiper';

// Слайдер на первом экране
if (document.querySelector('.firstScreenSwiper')) {
    const swiper = new Swiper('.firstScreenSwiper', {
        modules: [Navigation],
        allowTouchMove: true,
        spaceBetween: 10,
        slidesPerView: 1.1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            541: {
                slidesPerView: 1,
                loop: false,
            }
        }
    });
}

Михаил АлексМедиа, [4/6/2023 6:05 PM]
это примерный js для swiper, тебе только его поставить надо через npm





