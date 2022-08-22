import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};
const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(handleFormInput, 500));

const formData = {};
function handleFormInput({ target }) {
  formData[target.name] = target.value || '';
  const storageData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, storageData);
}

function saveForm() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  //   console.log(savedMessage);
  if (savedMessage) {
    refs.textarea.value = JSON.parse(savedMessage).message;
    refs.email.value = JSON.parse(savedMessage).email;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

saveForm();
