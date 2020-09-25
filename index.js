(function () {
  "use strict";
  const root = document.querySelector(".root");
  const container = document.querySelector(".places-list");

  const card = document.forms.card;
  const about = document.forms.about;

  const userNameVar = document.querySelector("#inputNames");
  const userAboutVar = document.querySelector("#inputAbout");

  const userName = document.querySelector(".user-info__name");
  const userAbout = document.querySelector(".user-info__job");

  const popupFormOpenButton = document.querySelector(`.user-info__button`);
  const popupFormCloseButton = document.querySelector(`.popup__close_form`);

  const popupFormAboutOpenButton = document.querySelector(
    `.user-info__edit-button`
  );
  const popupFormAboutCloseButton = document.querySelector(
    `.popup__close_about`
  );

  const popupPhototCloseButton = document.querySelector(`.popup__close_photo`);
  const popupPhotoVar = document.querySelector(".popup_photo");
  const popupPhoto = new PopupPhoto(
    popupPhotoVar,
    popupPhototCloseButton,
    root
  );
  popupPhoto.setEventListeners();

  const createCard = (...arg) => new Card(...arg, popupPhoto);

  const user = new UserInfo(userName, userAbout);

  /*колбек для открытия формы о себе */
  function onEditButton() {
    userNameVar.value = userName.textContent;
    userAboutVar.value = userAbout.textContent;
  }

  /*Колбек для сабмита информ о себе*/

  /*Колбек для закрытия формы*/
  function onClose(popupName) {
    const formName = popupName.querySelector("form");
    formName.reset();
    const submitButton = popupName.querySelector("button");
    const node = formName.querySelectorAll("input");
    Array.from(node);
    node.forEach((item) => formValidator.resetError(item));
    formValidator.setSubmitButtonState(submitButton, true);
  }

  const popupAbourFormVar = document.querySelector(".popup_profile");
  const popupAboutForm = new PopupForm(
    popupAbourFormVar,
    popupFormAboutCloseButton,
    popupFormAboutOpenButton,
    onClose,
    onEditButton
  );
  popupAboutForm.setEventListeners();

  function onAboutFormSubmit() {
    user.setUserInfo(userNameVar.value, userAboutVar.value);
    user.updateUserInfo();
    popupAboutForm.close();
  }

  const formValidator = new FormValidator(
    about,
    root,
    "#about-submit",
    onAboutFormSubmit
  );
  formValidator.setEventListeners();

  const popupFormVar = document.querySelector(".popup_new-card");
  const popupForm = new PopupForm(
    popupFormVar,
    popupFormCloseButton,
    popupFormOpenButton,
    onClose,
    undefined
  );
  popupForm.setEventListeners();

  const cardList = new CardList(
    container,
    initialCards,
    createCard,
    popupForm,
    card
  );

  /*Добавление новой карточки */
  const addNew = (name, link) => {
    event.preventDefault();
    cardList.addCard(createCard(name, link).create());
    popupForm.close();
    card.reset();
  };

  /*Добавление новой карточки */
  function onAddCardFormSubmit(elementName) {
    const submitButton = elementName.querySelector("button");
    addNew(event.target.name.value, event.target.link.value);
    formValidator.setSubmitButtonState(submitButton, true);
  }

  const formAddValidator = new FormValidator(
    card,
    root,
    "#form-submit",
    onAddCardFormSubmit
  );
  formAddValidator.setEventListeners();

  cardList.render(root);
})();
