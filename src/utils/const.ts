//Interfaces:
import { IRegisterPage } from '../forms/pages/RegisterPage';
//Enums:
import { SIMBOLS } from './enum';

export const ROUTES_APP = {
    HOME: {
        PATH: '/',
        NAME: 'Home',
        TO: '',
    },
    ABOUT: {
        PATH: '/about',
        NAME: 'About',
        TO: '/about',
    },
    USER: {
        PATH: '/user',
        NAME: 'User',
        TO: '/user',
    },
    REGISTER: {
        PATH: '/register',
        NAME: 'Register',
        TO: '/register',
    },
}

export const REGISTER_PAGE = {
    TITLE: 'Register',
    FORM: {
        TITLE: 'Register page',
        PLACEHOLDERS: {
            NAME: 'Name',
            USERNAME: 'Username',
            EMAIL: 'Email',
            PASSWORD: 'Password',
            CONFIRM_PASSWORD: 'Confirm Password',
        },
        TYPES: {
            TEXT: 'text' as 'text',
            EMAIL: 'email' as 'email',
            PASSWORD: 'password' as 'password',
        },
        INPUTS: {
            NAME: {
                NAME: 'name',
                ERROR: 'Nombre requerido',
            },
            USERNAME: {
                NAME: 'userName',
                ERROR: 'Nombre de usuario requerido',
                ERROR_USERNAME_EXIST: 'Nombre de usuario existente',
            },
            EMAIL: {
                NAME: 'email',
                ERROR: 'Email requerido',
                ERROR_INVALID: 'Email inválido',
            },
            PASSWORD: {
                NAME: 'password',
                ERROR: 'Contraseña requerida',
                ERROR_INVALID: 'Contraseña inválida (min 8 caracteres)',
            },
            CONFIRM_PASSWORD: {
                NAME: 'confirmPassword',
                ERROR: 'Confirmar contraseña requerida',
                ERROR_INVALID: 'Contraseñas no coinciden',
            },
        },
        BUTTON: {
            LABEL: 'Enviar',
            TYPE: 'submit' as 'submit',
        },
        BUTTON_CLEAR: {
            LABEL: 'Limpiar',
            TYPE: 'button' as 'button',
        },
    }
}

export const MAX_LENGTH_PASSWORD = 8;

export const ERROR_CLASS_INPUT = 'has-error';

export const DEFAULT_STATE_REGISTER_FORM: IRegisterPage = {
    name: SIMBOLS.EMPTY_STRING,
    userName: SIMBOLS.EMPTY_STRING,
    email: SIMBOLS.EMPTY_STRING,
    password: SIMBOLS.EMPTY_STRING,
    confirmPassword: SIMBOLS.EMPTY_STRING,
}