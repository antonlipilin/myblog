// скрыть показать статью !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let themes = document.querySelector('#themes');
let articles = document.querySelectorAll('.article_theme');

themes.onchange = function () {

for (let article of articles) {
if (themes.value === article.dataset.themeArticle || themes.value === 'select__theme') {
article.style.visibility = 'visible';
} else {
    article.style.visibility = 'hidden';
}
}
}


//форма "Написать мне" !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let sendMeForm = document.querySelector('#send_me_form');
let message = document.querySelector('#message');
let submitFormBtn = document.querySelector('.send-me-form-button');


message.oninput = function () {

    if (message.value.length < 9 || message.value.length > 200) {
        message.style.color = 'red';
        submitFormBtn.disabled = true;
    } else {
        message.style.color = '#202117';
        submitFormBtn.disabled = false;
    }
}





