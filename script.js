"use strict";

// Vazno - kada koristimo querySelector tada kod oabira klase stavljamo tacku ispred, u drugim slucajevima (kao npr. classList), tacka se ne koristi!!!

// Start coding
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

// For opening modals on each modal click
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Opening modals on each modal click
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", openModal);
}

// For Closing modal on x button/when we click outside of the modal
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Closing modal on x button
btnCloseModal.addEventListener("click", closeModal);
// Closing modal when we click outside of the modal
overlay.addEventListener("click", closeModal);

// Handling KeyPress event
document.addEventListener("keypress", function (e) {
  // console.log(e.key);
  if (e.key === "`" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
