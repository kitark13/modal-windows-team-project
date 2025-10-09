/* ----- Contact Modal ----- */

// open/close Contact Modal

const contactModal = document.querySelector(".backdrop-contact-modal");
const openBtnContactModal = document.querySelector(".open-contact-modal-btn");
const closeBtnContactModal = document.querySelector(".modal-close-btn");

openBtnContactModal.addEventListener("click", () => {
  contactModal.classList.remove("window-is-invisible");
  document.body.classList.add("not-scrolling-page");

  document.addEventListener("keydown", onEscKeyPress);
});

closeBtnContactModal.addEventListener("click", closeContactModal);

contactModal.addEventListener("click", (event) => {
  if (event.target === contactModal) {
    closeContactModal();
  }
});

function closeContactModal() {
  contactModal.classList.add("window-is-invisible");
  document.body.classList.remove("not-scrolling-page");

  document.removeEventListener("keydown", onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.key === "Escape") {
    closeContactModal();
  }
}

/* ----- Contact Modal ----- */

// open/close Book Modal

const bookModal = document.querySelector(".backdrop-book-modal");
const openBookModalBtn = document.querySelector(".open-book-modal-btn");
const closeBtnBookModal = document.querySelector(".book-modal-close-btn");

openBookModalBtn.addEventListener("click", () => {
  bookModal.classList.remove("window-is-invisible");
  document.body.classList.add("not-scrolling-page");

  document.addEventListener("keydown", onEscKeyPressInBookModal);
});

closeBtnBookModal.addEventListener("click", closeBookModal);

bookModal.addEventListener("click", (event) => {
  if (event.target === bookModal) {
    closeBookModal();
  }
});

function closeBookModal() {
  bookModal.classList.add("window-is-invisible");
  document.body.classList.remove("not-scrolling-page");

  document.removeEventListener("keydown", onEscKeyPress);
}

function onEscKeyPressInBookModal(event) {
  if (event.key === "Escape") {
    closeBookModal();
  }
}

// Form quantity book

const quantityInput = document.querySelector("#quantity");
const minusBtn = document.querySelector(".neg-book-btn");
const plusBtn = document.querySelector(".add-book-btn");

plusBtn.addEventListener("click", () => {
  quantityInput.value = Number(quantityInput.value) + 1;
});

minusBtn.addEventListener("click", () => {
  const currentValue = Number(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

// const betaAcc = new Accordion(".accordion-container", {
//   duration: 300,
//   showMultiple: true,
// });
