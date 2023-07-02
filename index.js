//открыли-закрыли окно
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupOpen = document.querySelector('.popup');

function popUp() {
    popupOpen.classList.add('popup_opened');
};

popupOpenButton.addEventListener('click', popUp);

let popupShutButton = document.querySelector('.popup__shut-button');

function popDown() {
    popupOpen.classList.remove('popup_opened');
};

popupShutButton.addEventListener('click', popDown);

//изменение данных профиля
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__input_user_name');
const jobInput = document.querySelector('.form__input_user_describe');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');

    const profileName = document.querySelector('.profile__title');
    const profileJob = document.querySelector('.profile__subtitle');
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;    
    
};    

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', popDown);










//добавим карточку
name="editProfileForm"
name="userName"
name="userDescribe"
function func() {
element.innerHTML += 
`<div class="popup__container">
            <button type="button" aria-label="Закрыть окно" class="button popup__shut-button"></button>
            <h2 class="popup__title">Новое место</h2>
            <form class="form" name="editProfileForm" method="post">                
                <input class="form__input form__input_user_name" type="text" name="userName" placeholder="Название" value="">
                <input class="form__input form__input_user_describe" type="text" name="userDescribe" placeholder="Ссылка на картинку" value="">
                <button class="button form__save-button" type="submit">Создать</button>               
            </form>
        </div>`;
}