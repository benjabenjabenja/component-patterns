import * as Yup from 'yup';
//Utils:
import { FORM_FORMIK_BASIC } from "./const";

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