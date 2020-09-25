class PopupForm extends Popup {
  constructor(popup, popupCloseButton, popupOpenButton, onClose, onEditButton) {
    super(popup, popupCloseButton);
    this.popupOpenButton = popupOpenButton;
    this.onClose = onClose;
    this.onEditButton = onEditButton;
  }

  open = () => {
    super.open();
    if (this.onEditButton) {
      this.onEditButton();
    }
  };

  close = () => {
    super.close();
    this.onClose(this._popup);
  };

  setEventListeners = () => {
    super.setEventListeners();
    this.popupOpenButton.addEventListener("click", this.open);
  };
}
