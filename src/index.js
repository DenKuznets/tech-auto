import "./index.html";
import "./index.scss";
import IMask from "imask";
import ymaps from "ymaps";
import Swiper, { Navigation, Pagination } from "swiper";
// import styles bundle
import "swiper/css/bundle";

// SWIPER
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  // loop: true,
  slidesPerView: 4,
  modules: [Navigation],
  spaceBetween: 30,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// нажатие кнопки Оставить заявку на главной
const heroBtn = document.getElementById("hero-btn");
heroBtn.addEventListener("click", openPopup);

// нажатие кнопки оставить заявку в Услугах
const servBtns = document.querySelectorAll(".services__card__btn-cta");
for (let btn of servBtns) {
  btn.addEventListener("click", openPopup);
}

// закрытие попапа по кнопке
const popupBtn = document.getElementById("popup__close-btn");
popupBtn.addEventListener("click", closePopup);

// закрытие попапа по клику мимо
document.getElementById("popup").addEventListener("click", function (e) {
  if (e.target.classList.contains("popup")) {
    closePopup();
  }
});

// открытие попапа
function openPopup() {
  document.getElementById("popup").classList.add("popup-show");
  document.body.classList.add("modal-open");
}

// закрыть попап
function closePopup() {
  document.getElementById("popup").classList.remove("popup-show");
  document.body.classList.remove("modal-open");
}

// маска для ввода телефона
let element = document.querySelector(".form-phone");
let maskOptions = {
  mask: "+{7}(000)000-00-00",
};
let mask = IMask(element, maskOptions);

// YANDEX MAPS
const yandexMap = document.getElementById("ymaps");
(() => {
  ymaps
    .load("https://api-maps.yandex.ru/2.1/?lang=ru_RU")
    .then((maps) => {
      const mapContainer = document.createElement("div");
      mapContainer.style.height = "500px";
      mapContainer.style.width = "740px";
      const map = new maps.Map(
        mapContainer,
        {
          // 51.367258, 42.078642
          center: [56.237432, 44.002465],
          zoom: 16,
        },
        { yandexMapDisablePoiInteractivity: true },
        {
          searchControlProvider: "yandex#search",
        }
      );
      let positions = map.getGlobalPixelCenter();
      //            positions = [
      //                positions[0] + 420,
      //                positions[1]
      //            ]
      const offsetPos = map.options
        .get("projection")
        .fromGlobalPixels(positions, map.getZoom());
      const myPlacemark = new maps.Placemark(offsetPos, {
        iconLayout: "default#image",
        iconImageSize: [50, 50],
        iconImageOffset: [-8, -72],
      });
      // const placemark = new maps.Placemark( map.getCenter(),
      //     {
      //         iconLayout: 'default#image',
      //         iconImageSize: [ 50, 50 ],
      //         iconImageOffset: [ -8, -72 ]
      //     }
      // );
      map.geoObjects.add(myPlacemark);
      yandexMap.appendChild(mapContainer);
    })
    .catch((error) => console.log("Failed to load Yandex Maps", error));
})();

// бургер нажатие
const burger = document.querySelector(".burger");
const closeBtn = document.querySelector(".mobile-menu__close-btn");
burger.addEventListener("click", openMobileMenu);

// кнопка закрыть мобильное меню нажатие
closeBtn.addEventListener('click', closeMobileMenu)

// ссылки в мобильном меню нажатие
let mobileMenuAnchors = document.querySelectorAll(".nav__item-header");
for (let anchor of mobileMenuAnchors) {
  anchor.addEventListener('click', closeMobileMenu)
}

//закрыть мобильное меню
function closeMobileMenu() {
  const nav = document.querySelector(".nav__list-header");
  nav.classList.remove("mobile-nav-active");
  burger.style.display = "block";
  closeBtn.style.display = "none";
  // document.body.classList.remove("modal-open");
}

// открыть мобильное меню
function openMobileMenu() {
  const nav = document.querySelector(".nav__list-header");
  nav.classList.add("mobile-nav-active");
  burger.style.display = "none";
  closeBtn.style.display = "block";
  // document.body.classList.add("modal-open");
}