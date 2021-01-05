import { Valval } from 'valval';

const validationForm = () => {
    const options = {
        name_exp: {
            required: true,
            minLength: 3,
            classValid: 'valid',
            classInvalid: 'invalid',
            name: true
        },
        email_exp: {
            required: true,
            classValid: 'valid',
            classInvalid: 'invalid',
            mail: true
        },
        password_exp: {
            required: true,
            minLength: 6,
            classValid: 'valid',
            classInvalid: 'invalid',
            password: true
        },
        'repeat-password_exp': {
            required: true,
            classValid: 'valid',
            classInvalid: 'invalid',
            repeatPassword: true,
            repeatAt: 'password_exp'
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