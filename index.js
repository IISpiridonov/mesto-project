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