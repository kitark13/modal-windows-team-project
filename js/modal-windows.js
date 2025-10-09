const contactModal = document.querySelector(".backdrop-contact-modal");
const openBtnContactModal = document.querySelector(".open-contact-modal-btn");
const closeBtnContactModal = document.querySelector(".modal-close-btn");

openBtnContactModal.addEventListener("click", () => {
  contactModal.classList.remove("window-is-invisible");
  document.body.classList.add("not-scrolling-page");
});

closeBtnContactModal.addEventListener("click", () => {
  contactModal.classList.add("window-is-invisible");
  document.body.classList.remove("not-scrolling-page");
});

// const betaAcc = new Accordion(".accordion-container", {
//   duration: 300,
//   showMultiple: true,
// });

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
