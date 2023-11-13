const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form')

const validateInput = ({target}) => {
    if (target.value.length > 2) {
        button.removeAttribute('disable');
        return;
    } 
    button.setAttribute('disable', '');
}

input.addEventListener('input', validateInput);