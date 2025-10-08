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
