Слайдер на Секцию с Сертификами.(используй swiper)
Мобильное меню
Анимация(используй туже что и в тестовом задании)
поставь ховер на кнопки 
цвет для ховера ссылкок #00AE31
для dot попробуй поставить vw что бы они примерно на одном месте оставлись относитель элемнов

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



<!-- для яндекс карт -->
import ymaps from 'ymaps';
(() => {
    ymaps
        .load("https://api-maps.yandex.ru/2.1/?lang=ru_RU")
        .then(maps => {
            const map = new maps.Map('map', {
                    // 51.367258, 42.078642
                    center: [51.367258, 42.078642],
                    zoom: 16
                },
                { yandexMapDisablePoiInteractivity: true, },
                {
                    searchControlProvider: 'yandex#search'
                }
            );
            let positions = map.getGlobalPixelCenter();
//            positions = [
//                positions[0] + 420,
//                positions[1]
//            ]
            const offsetPos = map.options.get('projection').fromGlobalPixels(positions, map.getZoom());
            const myPlacemark = new maps.Placemark(offsetPos,
                {
                    iconLayout: 'default#image',
                    iconImageSize: [ 50, 50 ],
                    iconImageOffset: [ -8, -72 ]
                });
            // const placemark = new maps.Placemark( map.getCenter(),
            //     {
            //         iconLayout: 'default#image',
            //         iconImageSize: [ 50, 50 ],
            //         iconImageOffset: [ -8, -72 ]
            //     }
            // );
            map.geoObjects.add( myPlacemark );

        })
        .catch(error => console.log('Failed to load Yandex Maps', error));
})()



Михаил АлексМедиа, [4/7/2023 10:49 AM]
в футере пединг снизу добавь, а то плохо смотрится

Михаил АлексМедиа, [4/7/2023 10:51 AM]
на социальные иконки поставь опасити при наведении 0,95

Михаил АлексМедиа, [4/7/2023 10:52 AM]
это должно быть ссылками

Михаил АлексМедиа, [4/7/2023 10:53 AM]
логотип в хедере и в футуру тоже ссылки

кнопки в услугах вверху фигмы стиль без ховера, в теле макета с ховером