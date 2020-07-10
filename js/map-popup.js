var openMap = document.querySelector(".map-wrapper");
var mapModal = document.querySelector(".map-popup");
var closeMap = document.querySelector(".close-map-btn");

openMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.add("show-map");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.remove("show-map");
});

