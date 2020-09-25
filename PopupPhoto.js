class PopupPhoto extends Popup {
  constructor(popup, popupCloseButton, root) {
    super(popup, popupCloseButton);

    this.root = root;
    this.close = this.close.bind(this);
  }

  addInfo = (event) => {
    const photo = this._popup.querySelector(".popup__content-image");
    photo.setAttribute("src", event.target.style.backgroundImage.slice(5, -2));
  };
}
