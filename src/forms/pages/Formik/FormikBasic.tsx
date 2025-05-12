import React from 'react'
//Components:
import { ErrorLabel } from '../../components/Forms';
//Lib:
import { useFormik } from 'formik';
//Utils:
import Utils from '../../../utils/utils';
import {
    DEFAULT_STATE_FORMIK_BASIC,
    FORM_FORMIK_BASIC
} from '../../../utils/const';
//Styles:
import styles from './FormikBasic.module.css';


export interface IFormikBasic {
    name: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const FormikBasic: React.FC = () => {

    const validateFormikBasic = (values: IFormikBasic) => {
        const { name, userName, email, password, confirmPassword } = values;
        const errors: Partial<IFormikBasic> = {};

        if(!name) {
            errors.name = FORM_FORMIK_BASIC.FORM.INPUTS.NAME.ERROR;
        }

        if(!userName) {
            errors.userName = FORM_FORMIK_BASIC.FORM.INPUTS.USERNAME.ERROR;
        }

        if(!email) {
            errors.email = FORM_FORMIK_BASIC.FORM.INPUTS.EMAIL.ERROR;
        }

        if(!Utils.isEmail(email)) {
            errors.email = FORM_FORMIK_BASIC.FORM.INPUTS.EMAIL.ERROR;
        }

        if(!password) {
            errors.password = FORM_FORMIK_BASIC.FORM.INPUTS.PASSWORD.ERROR;
        }

        if(!confirmPassword) {
            errors.confirmPassword = FORM_FORMIK_BASIC.FORM.INPUTS.CONFIRM_PASSWORD.ERROR;
        }

        if(password !== confirmPassword) {
            errors.confirmPassword = FORM_FORMIK_BASIC.FORM.INPUTS.CONFIRM_PASSWORD.ERROR;
        }

        return errors;
    }

    const {
        handleBlur,
        handleChange,
        handleSubmit,
        values: {
            name,
            userName,
            email,
            password,
            confirmPassword
        },
        errors,
        touched
    } = useFormik({
        initialValues: DEFAULT_STATE_FORMIK_BASIC,
        onSubmit: (values) => {
            console.log(values);
        }, 
        validate: validateFormikBasic
    })
    
    return (
        <div className={styles.containerPage}>
            <h1>{FORM_FORMIK_BASIC.TITLE}</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.NAME.NAME}>
                    {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.NAME}
                    <input
                        type={FORM_FORMIK_BASIC.FORM.TYPES.TEXT}
                        name={FORM_FORMIK_BASIC.FORM.INPUTS.NAME.NAME}
                        placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.NAME}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={name}
                    />
                </label>
                {(errors.name && touched.name) && <ErrorLabel>{errors.name}</ErrorLabel>}

                <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.USERNAME.NAME}>
                    {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.USERNAME}
                    <input
                        type={FORM_FORMIK_BASIC.FORM.TYPES.TEXT}
                        name={FORM_FORMIK_BASIC.FORM.INPUTS.USERNAME.NAME}
                        placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.USERNAME}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={userName}
                    />
                </label>
                {(errors.userName && touched.userName) && <ErrorLabel>{errors.userName}</ErrorLabel>}

                <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.EMAIL.NAME}>
                    {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.EMAIL}
                    <input
                        type={FORM_FORMIK_BASIC.FORM.TYPES.EMAIL}
                        name={FORM_FORMIK_BASIC.FORM.INPUTS.EMAIL.NAME}
                        placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.EMAIL}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={email}
                    />
                </label>
                {(errors.email && touched.email) && <ErrorLabel>{errors.email}</ErrorLabel>}

                <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.PASSWORD.NAME}>
                    {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.PASSWORD}
                    <input
                        type={FORM_FORMIK_BASIC.FORM.TYPES.PASSWORD}
                        name={FORM_FORMIK_BASIC.FORM.INPUTS.PASSWORD.NAME}
                        placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.PASSWORD}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={password}
                    />
                </label>
                {(errors.password && touched.password) && <ErrorLabel>{errors.password}</ErrorLabel>}

                <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.CONFIRM_PASSWORD.NAME}>
                    {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.CONFIRM_PASSWORD}
                    <input
                        type={FORM_FORMIK_BASIC.FORM.TYPES.PASSWORD}
                        name={FORM_FORMIK_BASIC.FORM.INPUTS.CONFIRM_PASSWORD.NAME}
                        placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.CONFIRM_PASSWORD}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={confirmPassword}
                    />
                </label>
                {(errors.confirmPassword && touched.confirmPassword) && <ErrorLabel>{errors.confirmPassword}</ErrorLabel>}

                <button
                    className={styles.buttonSubmit}
                    type={FORM_FORMIK_BASIC.FORM.BUTTON.TYPE}
                >
                    {FORM_FORMIK_BASIC.FORM.BUTTON.LABEL}
                </button>
            </form>
        </div>
    )
}

export default FormikBasic