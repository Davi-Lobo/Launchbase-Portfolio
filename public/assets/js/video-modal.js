const cards = document.querySelectorAll(".card-item"); 
const modalButtons = document.querySelectorAll(".openModal"); 

const modalOverlay = document.querySelector(".modal-overlay");
const modalVideo = modalOverlay.querySelector(".video");


for (let button of modalButtons) {
    button.addEventListener("click", function() {
        const videoID = button.getAttribute("id");
        modalOverlay.classList.add("actived");
        modalVideo.src = `https://www.youtube.com/embed/${videoID}`;
    });
};


for (let card of cards) {
    card.addEventListener("click", function() {
        const videoID = card.getAttribute("id");
        window.location.href = `/video?id=${videoID}`;
    });
};


const closeButton = document.querySelector(".modal-overlay");

closeButton.addEventListener("click", function() {
    modalOverlay.classList.remove("actived");
    modalVideo.src = "";
});