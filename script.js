const profileEdit = document.getElementById("profile__edit");
const popup = document.getElementById("popup");
const popupCloseButton = document.getElementById("popup__close-button");
const profileName = document.getElementById("profile__name");
const profileDescription = document.getElementById("profile__description");
const popupInputName = document.querySelector(".popup__input_type_name");
const popupInputAbout = document.querySelector(".popup__input_type_about");

// Открытие попапа
profileEdit.addEventListener("click", () => {
  popupInputName.value = profileName.textContent;
  popupInputAbout.value = profileDescription.textContent;
  popup.classList.add("popup_opened");
  popupInputName.focus(); // Устанавливаем фокус на поле ввода имени
});

// Закрытие попапа
popupCloseButton.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});

// Сохранение изменений
popup.addEventListener("submit", function (e) {
  e.preventDefault(); // Предотвращаем перезагрузку страницы
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputAbout.value;
  popup.classList.remove("popup_opened"); // Закрываем попап после сохранения
});
