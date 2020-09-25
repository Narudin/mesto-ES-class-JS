class Popup {
  constructor(popup, popupCloseButton) {
    this._popup = popup;

    this.popupCloseButton = popupCloseButton;
  }

  close() {
    this._popup.classList.remove("popup_is-opened");
  }

  open() {
    this._popup.classList.add("popup_is-opened");
  }

  setEventListeners() {
    this.popupCloseButton.addEventListener("click", this.close);
  }
}
