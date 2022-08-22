import throttle from 'lodash.throttle'
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input')
};
const STORAGE_KEY = 'feedback-form-state'

refs.form.addEventListener('submit', onFormSubmit);

saveForm();

refs.form.addEventListener('input', throttle(onAnyInput, 500))
function onAnyInput(event) {
   const formData = {
    'email': event.currentTarget.elements.email.value,
    'message': event.currentTarget.elements.message.value,
   }
   formData && localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function saveForm() {
    const savedMessage = localStorage.getItem(STORAGE_KEY)
   
    if (savedMessage) {
        refs.textarea.value = JSON.parse(savedMessage).message;
        refs.email.value = JSON.parse(savedMessage).email;
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}







