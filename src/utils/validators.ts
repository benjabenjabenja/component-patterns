import * as Yup from 'yup';
//Utils:
import { FORM_FORMIK_BASIC, REGISTER_FORMIK_PAGE } from "./const";
import { IRegisterFormikPage } from '../forms/pages/RegisterFormikPage/RegisterFormikPage';

export const registerSchemaValidators = Yup.object({
    name           : Yup.string()
                        .required(FORM_FORMIK_BASIC.FORM.INPUTS.NAME.ERROR),    
    userName       : Yup.string()
                        .required(FORM_FORMIK_BASIC.FORM.INPUTS.USERNAME.ERROR),    
    email          : Yup.string()
                        .email(FORM_FORMIK_BASIC.FORM.INPUTS.EMAIL.ERROR_INVALID)
                        .required(FORM_FORMIK_BASIC.FORM.INPUTS.EMAIL.ERROR),
    password       : Yup.string().required(FORM_FORMIK_BASIC.FORM.INPUTS.PASSWORD.ERROR),
    confirmPassword: Yup.string()
                        .required(FORM_FORMIK_BASIC.FORM.INPUTS.CONFIRM_PASSWORD.ERROR)
                        .oneOf([Yup.ref(FORM_FORMIK_BASIC.FORM.INPUTS.PASSWORD.NAME), FORM_FORMIK_BASIC.FORM.INPUTS.CONFIRM_PASSWORD.ERROR_INVALID]),    
    terms          : Yup.boolean()
                        .oneOf([true], FORM_FORMIK_BASIC.FORM.INPUTS.TERMS.ERROR),
    select         : Yup.string()
                        .required(FORM_FORMIK_BASIC.FORM.INPUTS.SELECT.ERROR)
                        .notOneOf([FORM_FORMIK_BASIC.FORM.OPTIONS.SELECT[0].VALUE], FORM_FORMIK_BASIC.FORM.INPUTS.SELECT.ERROR_INVALID)
})


const MIN_LENGTH_NAME = 2;
const MAX_LENGTH_NAME = 15;
const MIN_LENGTH_PASSWORD = 6;

export const registerFormikSchemaValidators: Yup.ObjectSchema<IRegisterFormikPage> = Yup.object({
    name: Yup.string()
            .required(REGISTER_FORMIK_PAGE.VALIDATORS.ERRORS.REQUIRED(REGISTER_FORMIK_PAGE.FORM.INPUTS.NAME.NAME))
            .min(MIN_LENGTH_NAME, REGISTER_FORMIK_PAGE.VALIDATORS.ERRORS.MIN(MIN_LENGTH_NAME))
            .max(MAX_LENGTH_NAME, REGISTER_FORMIK_PAGE.VALIDATORS.ERRORS.MAX(MAX_LENGTH_NAME)),
    email: Yup.string()
            .email(REGISTER_FORMIK_PAGE.VALIDATORS.ERRORS.EMAIL)
            .required(REGISTER_FORMIK_PAGE.VALIDATORS.ERRORS.REQUIRED(REGISTER_FORMIK_PAGE.FORM.INPUTS.EMAIL.NAME)),
    password: Yup.string()
            .required(REGISTER_FORMIK_PAGE.VALIDATORS.ERRORS.REQUIRED(REGISTER_FORMIK_PAGE.FORM.INPUTS.PASSWORD.NAME))
            .min(MIN_LENGTH_PASSWORD, REGISTER_FORMIK_PAGE.VALIDATORS.ERRORS.MIN(MIN_LENGTH_PASSWORD)),
    confirmPassword: Yup.string()
            .required(REGISTER_FORMIK_PAGE.VALIDATORS.ERRORS.REQUIRED(REGISTER_FORMIK_PAGE.FORM.INPUTS.CONFIRM_PASSWORD.NAME))
            .min(MIN_LENGTH_PASSWORD, REGISTER_FORMIK_PAGE.VALIDATORS.ERRORS.MIN(MIN_LENGTH_PASSWORD))
            .oneOf([Yup.ref(REGISTER_FORMIK_PAGE.FORM.INPUTS.PASSWORD.NAME), REGISTER_FORMIK_PAGE.VALIDATORS.ERRORS.CONFIRM_PASSWORD]),
})

