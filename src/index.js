import "./index.html";
import "./index.scss";

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