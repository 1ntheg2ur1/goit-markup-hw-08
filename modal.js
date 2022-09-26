(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModalRemove);
  refs.closeModalBtn.addEventListener("click", toggleModalAdd);
  refs.modal.addEventListener("click", onBackdropClick);

  function toggleModalAdd() {
    window.removeEventListener("keydown", onEscapeBtn);
    document.body.classList.remove("modal-open");
    refs.modal.classList.add("is-hidden");
  }

  function toggleModalRemove() {
    window.addEventListener("keydown", onEscapeBtn);
    document.body.classList.add("modal-open");
    refs.modal.classList.remove("is-hidden");
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      toggleModalAdd();
    }
  }

  function onEscapeBtn(event) {
    if (event.code === "Escape") {
      toggleModalAdd();
    }
  }
})();
