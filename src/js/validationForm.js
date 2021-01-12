import { Valval } from 'valval';

const validationForm = () => {
    const options = {
        name_exp: {
            required: true,
            minLength: 3,
            name: true,
            handlerWhenInvalidElement: function() {
              const warning = document.querySelector('.works__list-item-form-warning-name');
              
              warning.classList.add('show');
            },
            handlerWhenValidElement: function() {
              const warning = document.querySelector('.works__list-item-form-warning-name');
              
              warning.classList.remove('show');
            }
        },
        email_exp: {
            required: true,
            mail: true,
            handlerWhenInvalidElement: function() {
              const warning = document.querySelector('.works__list-item-form-warning-email');
              
              warning.classList.add('show');
            },
            handlerWhenValidElement: function() {
              const warning = document.querySelector('.works__list-item-form-warning-email');
              
              warning.classList.remove('show');
            }
        },
        password_exp: {
            required: true,
            minLength: 6,
            password: true,
            handlerWhenInvalidElement: function() {
              const warning = document.querySelector('.works__list-item-form-warning-password');
              
              warning.classList.add('show');
            },
            handlerWhenValidElement: function() {
              const warning = document.querySelector('.works__list-item-form-warning-password');
              
              warning.classList.remove('show');
            }
        },
        'repeat-password_exp': {
            required: true,
            repeatPassword: true,
            repeatAt: 'password_exp',
            handlerWhenInvalidElement: function() {
              const warning = document.querySelector('.works__list-item-form-warning-repeat-password');
              
              warning.classList.add('show');
            },
            handlerWhenValidElement: function() {
              const warning = document.querySelector('.works__list-item-form-warning-repeat-password');
              
              warning.classList.remove('show');
            }
        },
        submit_exp: {
            textWhenValid: 'Зарегистрироваться',
            textWhenInvalid: 'Повторите попытку!',
            button: true
        }
    }

    new Valval().start(options);
}

validationForm();