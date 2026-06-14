const dialog = document.querySelector(".dialog");
const modalButton = document.querySelector(".modal-button");
const dialogButton = document.querySelector(".dialog__button");

modalButton.addEventListener("click", () => {
  try {
    dialog.showModal();
  } catch (error) {
    console.error(error);
  }
});

dialogButton.addEventListener("click", () => {
  try {
    dialog.close();
  } catch (error) {
    console.error(error);
  }
});
