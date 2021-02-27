import { Valval } from 'valval';

const validationForm = () => {
    const options = {
        name_exp: {
            required: true,
            minLength: 3,
            name: true
        },
        email_exp: {
            required: true,
            mail: true
        },
        password_exp: {
            required: true,
            minLength: 6,
            password: true
        },
        'repeat-password_exp': {
            required: true,
            repeatPassword: true,
            repeatAt: 'password_exp'
        }
    }

    new Valval().start(options);
}

validationForm();