class CardList {
  constructor(container, array, createCard, popup, form) {
    this._array = array;
    this._container = container;
    this._createCard = createCard;
    this._form = form;
    this._popup = popup;
  }

  addCard = (arg) => {
    this._container.append(arg);
  };

  render() {
    this._array.forEach((item) => {
      const some = this._createCard(item.name, item.link).create();
      this.addCard(some);
    });
  }
}
