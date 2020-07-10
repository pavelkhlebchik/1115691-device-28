var openForm = document.querySelector(".opened-form");
var modalPopup = document.querySelector(".popup");
var closePopup = modalPopup.querySelector(".close-modal-btn");

openForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.add("popup-show");
});

closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove("popup-show");
}); 