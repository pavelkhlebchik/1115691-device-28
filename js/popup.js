var openForm = document.querySelector(".opened-form");
var modalPopup = document.querySelector(".popup");
var closePopup = modalPopup.querySelector(".close-modal-btn");
var writeUsForm = modalPopup.querySelector(".write-us-form");
var nameField = modalPopup.querySelector(".name-field");
var emailField = modalPopup.querySelector(".email-field");
var commentField = modalPopup.querySelector(".comment-field");

var isStorageSupport = true;
var storageName = " ";
var storageEmail = " ";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

openForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("popup-show");

  if (storageName) {
    nameField.value = storageName;
    emailField.focus();
  } else {
    nameField.focus();
  }
  if (storageEmail) {
    emailField.value = storageEmail;
    commentField.focus();
  } else {
    emailField.focus();
  }
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("popup-show");
  modalPopup.classList.remove("popup-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!nameField.value || !emailField.value) {
    evt.preventDefault();
    modalPopup.classList.remove("popup-error");
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add("popup-error");
  } else {
    localStorage.setItem("name", nameField.value);
    localStorage.setItem("email", emailField.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("popup-show");
      modalPopup.classList.remove("popup-error");
    }
  }
});
