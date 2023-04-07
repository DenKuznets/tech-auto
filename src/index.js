import "./index.html";
import "./index.scss";
import IMask from "imask";

// нажатие кнопки Оставить заявку на главной
const heroBtn = document.getElementById("hero-btn");
heroBtn.addEventListener('click', function () {
  document.getElementById('popup').classList.add('popup-show')
  document.body.classList.add('modal-open')
})

// закрытие попапа по кнопке
const popupBtn = document.getElementById("popup__close-btn");
popupBtn.addEventListener("click", function () {
  closePopup();
});


// закрытие попапа по клику мимо
document.getElementById('popup').addEventListener('click', function (e) {
  if (e.target.classList.contains("popup")) {
    closePopup();
  }
})

// закрыть попап
function closePopup() {
  document.getElementById("popup").classList.remove("popup-show");
  document.body.classList.remove("modal-open");
}

// маска для ввода телефона
let element = document.querySelector('.form-phone');
let maskOptions = {
  mask: "+{7}(000)000-00-00",
};
let mask = IMask(element, maskOptions);

// бурег нажатие
const burger = document.querySelector('.burger');



