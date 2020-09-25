class FormValidator {
  constructor(element, root, Selector, onFormSubmit) {
    this.element = element;
    this.root = root;

    this.submitButton = this.root.querySelector(`${Selector}`);
    this._onFormSubmit = onFormSubmit;
  }

  activateError = (element) => {
    element.classList.add("popup__error-message_discovered");
  };

  resetError = (element) => {
    element.nextElementSibling.classList.remove(
      "popup__error-message_discovered"
    );
    element.nextElementSibling.textContent = "";
  };
  handleValidate = (event) => {
    const input = event.target;
    const errorElement = this.element.querySelector(`#error-${input.name}`);
    const errorText = this.checkInputValidity(input);

    if (errorText !== "") {
      this.activateError(errorElement);
      errorElement.textContent = errorText;
    } else {
      this.resetError(input);
    }
    const form = event.target.closest("form");
    const submitButton = form.querySelector("button[type=submit]");
    this.inputs = form.querySelectorAll("input");

    const inputs = Array.prototype.slice.call(this.inputs);
    const isValid = inputs.every((input) => {
      return this.checkInputValidity(input) === "";
    });
    this.setSubmitButtonState(submitButton, !isValid);
  };

  checkInputValidity = (input) => {
    if (input.validity.valueMissing) {
      return "Это обязательное поле";
    }

    if (input.validity.tooShort || input.validity.tooLong) {
      return "Должно быть от 2 до 30 символов";
    }

    if (input.type === "url" && input.validity.typeMismatch) {
      return "Здесь должна быть ссылка";
    }
    return "";
  };

  setSubmitButtonState = (button, flag) => {
    if (!flag) {
      button.removeAttribute("disabled");
      button.classList.add("popup__button_is-activ");
    } else {
      button.setAttribute("disabled", "");
      button.classList.remove("popup__button_is-activ");
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this._onFormSubmit) {
      this._onFormSubmit(this.element);
    }
  };

  setEventListeners = () => {
    this.element.addEventListener("submit", this.handleFormSubmit);
    this.element.addEventListener("input", (event) => {
      this.handleValidate(event);
    });
  };
}
