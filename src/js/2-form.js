const feedbackForm = document.querySelector('.feedback-form');


let formData = {
    email: '',
    message: ''
};

checkInputStart();

feedbackForm.addEventListener('input', fieldUserInfo);
feedbackForm.addEventListener('submit', sendUserInfo);

function fieldUserInfo() {
    formData.email = (feedbackForm.elements.email.value).trim();
    formData.message = (feedbackForm.elements.message.value).trim();

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function sendUserInfo(event) {
    event.preventDefault();

    const email = formData.email;
    const message = formData.message;

    if (!email || !message) {
        alert('Please, fill in all fields before sending!');
        return;
    }

    const userInfo = { email: email, message: message };
    console.log(userInfo);

    feedbackForm.reset();
    formData = { email: '', message: '' }; 
    localStorage.setItem('feedback-form-state', JSON.stringify(formData)); 
}

function checkInputStart() {

    const localInfo = JSON.parse(localStorage.getItem("feedback-form-state")) ?? {};

    formData.email = localInfo.email || '';
    formData.message = localInfo.message || '';

    feedbackForm.elements.email.value = formData.email;
    feedbackForm.elements.message.value = formData.message;
}