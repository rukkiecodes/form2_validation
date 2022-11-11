const _username = document.querySelector('#username');
const _email = document.querySelector('#email');
const _password = document.querySelector('#password');
const _rememberMe = document.querySelector('#rememberMe');
const _emailError = document.querySelector('#emailError');
const _passwordError = document.querySelector('#passwordError');
const _loginButton = document.querySelector('#loginButton');
const _peep = document.querySelector('.passwordDiv button');
const _icon = document.querySelector('#icon');

let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

_email.addEventListener('keypress', () => {
  if (_email.value.match(regexEmail)) {
    _emailError.innerText = ''
  } else if (_email.value == '') {
    _emailError.innerText = ''
  } else {
    _emailError.innerText = 'Please enter a valid email'
  }
});

_email.addEventListener('blur', () => {
  if (_email.value.match(regexEmail)) {
    _emailError.innerText = ''
  } else {
    _emailError.innerText = 'Please enter a valid email'
  }
});

_password.addEventListener('keypress', () => {
  if (_password.value.length < 6) {
    _passwordError.innerText = 'Password must not be less that 6 characters'
  } else {
    _passwordError.innerText = ''
  }
});

_password.addEventListener('blur', () => {
  if (_password.value.length < 6) {
    _passwordError.innerText = 'Password must not be less that 6 characters'
  } else {
    _passwordError.innerText = ''
  }
});

_loginButton.addEventListener('click', () => {
  if (_rememberMe.checked && _username.value != '' && (_email.value != '' && _email.value.match(regexEmail)) && _password.value.length > 6) {
    _loginButton.innerText = 'Congrates you passed'
    _loginButton.style.backgroundColor = '#005C4B'
  } else {
    _loginButton.innerText = 'Please complete the form'
    _loginButton.style.backgroundColor = '#ff0000'
  }
});

let type = false;
_peep.addEventListener('click', () => {
  type = !type
  _password.setAttribute('type', type ? 'text' : 'password')

  if (type) {
    _icon.classList.remove('fa-eye')
    _icon.classList.add('fa-eye-slash')
  } else {
    _icon.classList.add('fa-eye')
    _icon.classList.remove('fa-eye-slash')
  }
})