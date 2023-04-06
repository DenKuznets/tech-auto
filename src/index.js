import "./index.html";
import "./index.scss";
import IMask from "imask";

const heroBtn = document.getElementById("hero-btn");
heroBtn.addEventListener('click', function () {
  document.getElementById('popup').classList.add('popup-show')
  document.body.classList.add('modal-open')
})

const popupBtn = document.getElementById("popup__close-btn");

popupBtn.addEventListener("click", function () {
  document.getElementById("popup").classList.remove("popup-show");
  document.body.classList.remove("modal-open");
});

let element = document.querySelector('.form-phone');
let maskOptions = {
  mask: "+{7}(000)000-00-00",
};
let mask = IMask(element, maskOptions);