import throttle from 'lodash.throttle'
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input')
};
const STORAGE_KEY = 'feedback-form-state'
const formData = {};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onAnyInput, 500));
saveForm();


refs.form.addEventListener('input', onAnyInput)
function onAnyInput(event) {
   formData[event.target.name] = event.target.value;
   
 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
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







