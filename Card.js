class Card {
  static _template = document.querySelector("#place-card-item-template")
    .content;

  constructor(name, link, popup) {
    this._name = name;
    this._link = link;
    this._popup = popup;
  }

  like = (event) => {
    event.target.classList.toggle("place-card__like-icon_liked");
  };

  remove = (event) => {
    const placeCard = event.target.closest(".place-card");
    placeCard.remove();
  };

  create = () => {
    this._view = Card._template.cloneNode(true).children[0];
    this._view.querySelector(".place-card__name").textContent = this._name;
    const cardImage = this._view.querySelector(".place-card__image");
    cardImage.style.backgroundImage = `url(${this._link})`;
    cardImage.addEventListener("click", (event) => {
      if (event.target.className === "place-card__image") {
        this._popup.addInfo(event);
        this._popup.open();
      }
    });

    this._view
      .querySelector(".place-card__like-icon")
      .addEventListener("click", this.like);
    this._view
      .querySelector(".place-card__delete-icon")
      .addEventListener("click", this.remove);

    return this._view;
  };
}
