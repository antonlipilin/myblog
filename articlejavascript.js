//Форма "Оставить комментарий"!!!!!!!!!!!!!!!!!!

let newCommentBtn = document.querySelector('.new-comment-add-button');
let newCommentArea = document.querySelector('#new_comment_textarea');//Поле ввода новго комментария.

newCommentArea.oninput = function () {

    if (newCommentArea.value.length < 9 || newCommentArea.value.length > 200) {
        newCommentBtn.disabled = true;
        newCommentArea.style.color = 'red';
    } else {
        newCommentBtn.disabled = false;
        newCommentArea.style.color = '#202117';
    }
}


// Кнопка лайков !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let likeBtn = document.querySelector('.like-button');
let likesCount = document.querySelector('.likes_count');

likeBtn.onclick = function () {
    if (likeBtn.classList.contains('clicked')) {
        likesCount.textContent--;
        likeBtn.classList.remove('clicked');
        likesCount.style.color = '#202117';
    } else {
        likeBtn.classList.add('clicked');
        likesCount.textContent++;
        likesCount.style.color = 'aquamarine';
    }
}

// Новый комментарий !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let allComments = document.querySelector('.all-comments'); //Комментарии.
let newCommentForm = document.querySelector('.new_comment');// Форма нового комментария.
let usersCommentName = document.querySelector('#new-comment-add-name'); // Имя пользователя




newCommentForm.onsubmit = function (event) {
    event.preventDefault();
    let newPerson = document.createElement('div'); // Контейнер для новго пользователя
    newPerson.classList.add('person');

    let newCommentName = document.createElement('p'); // Имя пользователя 
    newCommentName.classList.add('person_name');
    newCommentName.textContent = usersCommentName.value;


    let newCommentText = document.createElement('p'); //Текст комментария
    newCommentText.classList.add('person_comment');
    newCommentText.textContent = newCommentArea.value;

    let newCommentImg = document.createElement('img'); // Фото пользователя
    newCommentImg.classList.add('person_photo');
    newCommentImg.src = 'img/Ivan.png';

    newPerson.append(newCommentImg); // Доюавление текста и фото в контейнер
    newPerson.append(newCommentName);
    newPerson.append(newCommentText);


    allComments.append(newPerson); //Добавление нового комментария в блок с комментариями 
}


