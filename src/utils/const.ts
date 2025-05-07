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
            NAME: 'name',
            EMAIL: 'email',
            PASSWORD: 'password',
            CONFIRM_PASSWORD: 'confirmPassword',
        },
        BUTTON: {
            LABEL: 'Register',
            TYPE: 'submit' as 'submit',
        },
    }
}

export const DEFAULT_STATE_REGISTER_FORM = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

export const SIMBOLS = {
    EMPTY_STRING: '',
}