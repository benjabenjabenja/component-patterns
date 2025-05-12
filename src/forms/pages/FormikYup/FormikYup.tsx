import React from 'react'
//Interfaces:
import { IFormikBasic } from '../Formik/FormikBasic';
//Lib:
import { useFormik } from 'formik';
//Utils:
import { DEFAULT_STATE_FORMIK_BASIC, FORM_FORMIK_BASIC } from '../../../utils/const';
import { registerSchemaValidators } from '../../../utils/validators';
//Styles:
import styles from '../Formik/FormikBasic.module.css';

const FormikYup: React.FC = () => {

    const onSubmit = (values: IFormikBasic) => {
        console.log(values);
    }

    const {
        handleSubmit,
        errors,
        touched,
        getFieldProps
    } = useFormik({
        initialValues: DEFAULT_STATE_FORMIK_BASIC,
        onSubmit, 
        validationSchema: registerSchemaValidators
    })
    
    return (
        <div className={styles.containerPage}>
            <h1>{FORM_FORMIK_BASIC.TITLE_YUP}</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.NAME.NAME}>
                    {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.NAME}
                    <input
                        type={FORM_FORMIK_BASIC.FORM.TYPES.TEXT}
                        placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.NAME}
                        {...getFieldProps(FORM_FORMIK_BASIC.FORM.INPUTS.NAME.NAME)}
                    />
                </label>
                {(errors.name && touched.name) && <span>{errors.name}</span>}

                <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.USERNAME.NAME}>
                    {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.USERNAME}
                    <input
                        type={FORM_FORMIK_BASIC.FORM.TYPES.TEXT}
                        placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.USERNAME}
                        {...getFieldProps(FORM_FORMIK_BASIC.FORM.INPUTS.USERNAME.NAME)}
                    />
                </label>
                {(errors.userName && touched.userName) && <span>{errors.userName}</span>}

                <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.EMAIL.NAME}>
                    {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.EMAIL}
                    <input
                        type={FORM_FORMIK_BASIC.FORM.TYPES.EMAIL}
                        placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.EMAIL}
                        {...getFieldProps(FORM_FORMIK_BASIC.FORM.INPUTS.EMAIL.NAME)}
                    />
                </label>
                {(errors.email && touched.email) && <span>{errors.email}</span>}

                <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.PASSWORD.NAME}>
                    {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.PASSWORD}
                    <input
                        type={FORM_FORMIK_BASIC.FORM.TYPES.PASSWORD}
                        placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.PASSWORD}
                        {...getFieldProps(FORM_FORMIK_BASIC.FORM.INPUTS.PASSWORD.NAME)}
                    />
                </label>
                {(errors.password && touched.password) && <span>{errors.password}</span>}

                <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.CONFIRM_PASSWORD.NAME}>
                    {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.CONFIRM_PASSWORD}
                    <input
                        type={FORM_FORMIK_BASIC.FORM.TYPES.PASSWORD}
                        placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.CONFIRM_PASSWORD}
                        {...getFieldProps(FORM_FORMIK_BASIC.FORM.INPUTS.CONFIRM_PASSWORD.NAME)}
                    />
                </label>
                {(errors.confirmPassword && touched.confirmPassword) && <span>{errors.confirmPassword}</span>}

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

export default FormikYup