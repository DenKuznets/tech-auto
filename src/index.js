import "./index.html";
import "./index.scss";
import IMask from "imask";
import ymaps from "ymaps";

// нажатие кнопки Оставить заявку на главной
const heroBtn = document.getElementById("hero-btn");
heroBtn.addEventListener("click", function () {
  document.getElementById("popup").classList.add("popup-show");
  document.body.classList.add("modal-open");
});

// закрытие попапа по кнопке
const popupBtn = document.getElementById("popup__close-btn");
popupBtn.addEventListener("click", function () {
  closePopup();
});

// закрытие попапа по клику мимо
document.getElementById("popup").addEventListener("click", function (e) {
  if (e.target.classList.contains("popup")) {
    closePopup();
  }
});

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

// бурег нажатие
const burger = document.querySelector(".burger");

// YANDEX MAPS
const yandexMap = document.getElementById('ymaps');
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
      yandexMap.appendChild(mapContainer)
    })
    .catch((error) => console.log("Failed to load Yandex Maps", error));
})();
