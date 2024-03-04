const storageKey = 'feedback-form-state';
const form = document.querySelector('.modal-form');

form.addEventListener('input', onInputHandle);
// form.addEventListener('submit', onBtnSubmit);

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


// // Сабміт форми
// function onBtnSubmit(e) {
//      e.preventDefault();
//     // Перевірка, що всі поля заповнені
//     const userName = form.elements.name.value;
//     const userPhone = form.elements.phone.value;
//     const userMail = form.elements.email.value;
//     const userComment = form.elements.comment.value;

//     if (userName === '' ||userPhone === '' || userMail === '' || userComment === '') {
//         alert ('Будь ласка, заповніть всі поля форми')
//         return;
//     } else {
//         // очищуємо сховище і поля форми; виводим у консоль об'єкт з полями email, message та їхніми поточними значеннями.
//         const data = loadFromLS(storageKey) || {};
//         console.log(data);
//         form.reset();
//         localStorage.removeItem(storageKey);
//         alert('Дякуєм за звернення, наш фахівець звяжеться з Вами найближчим часом')ж
//           modalOpen.classList.remove('is-open');
//     }
// }