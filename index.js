const btnHero = document.querySelector('.hero-btn');
const modal = document.querySelector('.modal');
const btnModalClose = document.querySelector('.modal-close-btn');


btnHero.addEventListener('click', onBtnClick);
btnModalClose.addEventListener('click', onBtnModalCloseClick)

function onBtnClick(e) {
    modal.classList.add('is-open');
}

function onBtnModalCloseClick() {
    console.log('close modal');
    modal.classList.remove('is-open');
}

//  Обробка інпутів форми 
const storageKey = 'feedback-form-state';
const form = document.querySelector('.modal-form');

form.addEventListener('input', onInputHandle);
form.addEventListener('submit', onBtnSubmit);

// вивід даних з local storage в форму під час оновлення сторінки
restoreData();


// збереження в local storage даних з інпуту
function onInputHandle() {
    const userName = form.elements.name.value;
    const userPhone = form.elements.phone.value;
    const userMail = form.elements.email.value;
    const userComment = form.elements.comment.value;

    const data = {
        name: userName,
        phone: userPhone,
        mail: userMail,
        comment: userComment,
    }

    saveToLS(storageKey, data);
}

// функція для виводу даних з local storage в форму 
function restoreData() {
    const data = loadFromLS(storageKey) || {};
    form.elements.name.value = data.name || '';
    form.elements.phone.value = data.phone || '';
    form.elements.email.value = data.mail || '';
    form.elements.comment.value = data.comment || '';
}

// функція для збереження даних в local storage
function saveToLS(key = 'empty', value = ' ') {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}

// функція для отримання даних з local storage
function loadFromLS (key = 'empty') {
    const data = localStorage.getItem(key);
    try {
        const result = JSON.parse(data);
        return result;
    } catch {
        return data;
    }
}


// Сабміт форми
function onBtnSubmit(e) {
     e.preventDefault();
    // Перевірка, що всі поля заповнені
    const userName = form.elements.name.value;
    const userPhone = form.elements.phone.value;
    const userMail = form.elements.email.value;
    if (userName === '' || userPhone === '' || userMail === '') {
        alert('заповніть всі поля форми')
        return;
    } else {
        // очищуємо сховище і поля форми; виводим у консоль об'єкт з полями email, message та їхніми поточними значеннями.
        const data = loadFromLS(storageKey) || {};
        console.log(data);
        form.reset();
        localStorage.removeItem(storageKey);

    }
}
        //   <div class="checkbox-container">
        //     <input class="modal-check visually-hidden" type="checkbox" value="true" name="user-privacy" id="user-privacy"/>
        //     <label class="check-label" for="user-privacy"  </label>
        
        // <button type="submit" class="modal-form-btn hero-btn">Send</button>