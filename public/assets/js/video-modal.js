const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card-item"); 


for (let card of cards) {
    card.addEventListener("click", function() {
        modalOverlay.classList.add("actived");
    });
}

const closeButton = document.querySelector(".modal-overlay");

closeButton.addEventListener("click", function() {
    modalOverlay.classList.remove("actived");
});