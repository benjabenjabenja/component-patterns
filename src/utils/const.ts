//Interfaces:
import { IFormikBasic } from '../forms/pages/Formik/FormikBasic';
import { IRegisterPage } from '../forms/pages/RegisterPage/RegisterPage';
//Enums:
import { INPUT_TYPE, SIMBOLS } from './enum';

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
    FORMIK: {
        PATH: '/formik-basic',
        NAME: 'Formik Basic',
        TO: '/formik-basic',
    },
    FORMIK_YUP: {
        PATH: '/formik-yup',
        NAME: 'Formik Yup',
        TO: '/formik-yup',
    },
    FORMIK_COMPONENTS: {
        PATH: '/formik-components',
        NAME: 'Formik Components',
        TO: '/formik-components',
    },
    FORMIK_ABSTRACT: {
        PATH: '/formik-abstract',
        NAME: 'Formik Abstract',
        TO: '/formik-abstract',
    },
    REGISTER_FORMIK: {
        PATH: '/register-formik',
        NAME: 'Register Formik',
        TO: '/register-formik',
    },
    DYNAMIC_FORM: {
        PATH: '/dynamic-form',
        NAME: 'Dynamic Form',
        TO: '/dynamic-form',
    }
}

export const MAX_LENGTH_PASSWORD = 8;

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
            TEXT: INPUT_TYPE.TEXT as 'text',
            EMAIL: INPUT_TYPE.EMAIL as 'email',
            PASSWORD: INPUT_TYPE.PASSWORD as 'password',
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
                ERROR_INVALID: `Contraseña inválida (min ${MAX_LENGTH_PASSWORD} caracteres)`,
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

export const ERROR_CLASS_INPUT = 'has-error';

export const DEFAULT_STATE_REGISTER_FORM: IRegisterPage = {
    name: SIMBOLS.EMPTY_STRING,
    userName: SIMBOLS.EMPTY_STRING,
    email: SIMBOLS.EMPTY_STRING,
    password: SIMBOLS.EMPTY_STRING,
    confirmPassword: SIMBOLS.EMPTY_STRING,
}

export const DEFAULT_STATE_FORMIK_BASIC: IFormikBasic = {
    name: SIMBOLS.EMPTY_STRING,
    userName: SIMBOLS.EMPTY_STRING,
    email: SIMBOLS.EMPTY_STRING,
    password: SIMBOLS.EMPTY_STRING,
    confirmPassword: SIMBOLS.EMPTY_STRING,
}

export const FORM_FORMIK_BASIC = {
    TITLE: 'Formik Basic',
    TITLE_COMPONENTS: 'Formik Components',
    TITLE_YUP: 'Formik - Yup',
    TITLE_ABSTRACT: 'Formik Abstract',
    FORM: {
        TITLE: 'Formik Basic',
        PLACEHOLDERS: {
            NAME: 'Name',
            USERNAME: 'UserName',
            EMAIL: 'Email',
            PASSWORD: 'Password',
            CONFIRM_PASSWORD: 'Confirm Password',
            TERMS: 'Acepto los términos y condiciones',
            SELECT: 'Selecciona una opción',
        },
        TYPES: {
            TEXT: INPUT_TYPE.TEXT as 'text',
            EMAIL: INPUT_TYPE.EMAIL as 'email',
            PASSWORD: INPUT_TYPE.PASSWORD as 'password',
            CHECKBOX: INPUT_TYPE.CHECKBOX as 'checkbox',
        },
        INPUTS: {
            NAME: {
                NAME: 'name',
                ERROR: 'Nombre requerido',
            },
            USERNAME: {
                NAME: 'userName',
                ERROR: 'Nombre de usuario requerido',
            },
            EMAIL: {
                NAME: 'email',
                ERROR: 'Email requerido',
                ERROR_INVALID: 'Email inválido',
            },
            PASSWORD: {
                NAME: 'password',
                ERROR: 'Contraseña requerida',
            },
            CONFIRM_PASSWORD: {
                NAME: 'confirmPassword',
                ERROR: 'Confirmar contraseña requerida',
                ERROR_INVALID: 'Contraseñas no coinciden',
            },
            TERMS: {
                NAME: 'terms',
                ERROR: 'Debes aceptar los términos y condiciones',
            },
            SELECT: {
                NAME: 'select',
                ERROR: 'Debes seleccionar una opción',
                ERROR_INVALID: 'Debes seleccionar una opción válida (opción predeterminada no válida)',
            },
        },
        BUTTON: {
            LABEL: 'Enviar',
            TYPE: 'submit' as 'submit',
        },
        OPTIONS: {
            SELECT: [
                {
                    VALUE: '1',
                    LABEL: 'Opción 1',
                },
                {
                    VALUE: '2',
                    LABEL: 'Opción 2',
                },
                {
                    VALUE: '3',
                    LABEL: 'Opción 3',
                },
            ]
        }
    },
}

export const REGISTER_FORMIK_PAGE = {
    TITLE: 'Register Formik',
    INITIAL_VALUES: {
        name: SIMBOLS.EMPTY_STRING,
        email: SIMBOLS.EMPTY_STRING,
        password: SIMBOLS.EMPTY_STRING,
        confirmPassword: SIMBOLS.EMPTY_STRING,
    },
    VALIDATORS: {
        ERRORS: {
            REQUIRED: (name: string) => `Campo ${name} requerido`,
            MIN: (min: number) => `Mínimo ${min} caracteres`,
            MAX: (max: number) => `Máximo ${max} caracteres`,
            EMAIL: 'Email inválido',
            CONFIRM_PASSWORD: 'Contraseñas no coinciden',
        },        
    },
    FORM: {
        PLACEHOLDERS: {
            NAME: 'Name',
            EMAIL: 'Email',
            PASSWORD: 'Password',
            CONFIRM_PASSWORD: 'Confirm Password',
        },
        TYPES: {
            TEXT: INPUT_TYPE.TEXT as 'text',
            EMAIL: INPUT_TYPE.EMAIL as 'email',
            PASSWORD: INPUT_TYPE.PASSWORD as 'password',
        },
        INPUTS: {
            NAME: {
                NAME: 'name',
            },
            EMAIL: {
                NAME: 'email'
            },
            PASSWORD: {
                NAME: 'password'
            },
            CONFIRM_PASSWORD: {
                NAME: 'confirmPassword'
            },
        },
    },
    BUTTON: {
        LABEL: 'Registrarse !',
        TYPE: 'submit' as 'submit',
    },
    BUTTON_CLEAR: {
        LABEL: 'Limpiar',
        TYPE: 'button' as 'button',
    },
}

export const DYNAMIC_FORM = {
    TITLE: 'Dynamic Form',
    BUTTON: {
        LABEL: 'Enviar',
        TYPE: 'submit' as 'submit',
    },
    BUTTON_CLEAR: {
        LABEL: 'Volver a los valores iniciales',
        TYPE: 'button' as 'button',
    },
}

export const DEFAULT_STATE_DYNAMIC_FORM: { [key: string]: any } = {}

