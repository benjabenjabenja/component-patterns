import React from 'react'
//Interfaces:
import { IFormikBasic } from '../Formik/FormikBasic';
//Lib:
import { Formik, Form, Field, ErrorMessage } from 'formik';
//Utils:
import { DEFAULT_STATE_FORMIK_BASIC, FORM_FORMIK_BASIC } from '../../../utils/const';
import { registerSchemaValidators } from '../../../utils/validators';
//Styles:
import styles from '../Formik/FormikBasic.module.css';
import stylesFormikComponents from './FormikComponents.module.css';

const FormikComponents: React.FC = () => {

    const onSubmit = (values: IFormikBasic) => {
        console.log(values);
    }
    
    return (
        <div className={styles.containerPage}>
            <h1>{FORM_FORMIK_BASIC.TITLE_COMPONENTS}</h1>

            <Formik
                initialValues={DEFAULT_STATE_FORMIK_BASIC}
                onSubmit={onSubmit}
                validationSchema={registerSchemaValidators}
            >
                {
                    ({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit} noValidate>
                            <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.NAME.NAME}>
                                {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.NAME}
                                <Field
                                    type={FORM_FORMIK_BASIC.FORM.TYPES.TEXT}
                                    name={FORM_FORMIK_BASIC.FORM.INPUTS.NAME.NAME}
                                />
                            </label>
                            <ErrorMessage
                                name={FORM_FORMIK_BASIC.FORM.INPUTS.NAME.NAME}
                                component="span"
                            />

                            <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.USERNAME.NAME}>
                                {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.USERNAME}
                                <Field
                                    type={FORM_FORMIK_BASIC.FORM.TYPES.TEXT}
                                    name={FORM_FORMIK_BASIC.FORM.INPUTS.USERNAME.NAME}
                                />
                            </label>
                            <ErrorMessage
                                name={FORM_FORMIK_BASIC.FORM.INPUTS.USERNAME.NAME}
                                component="span"
                            />

                            <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.EMAIL.NAME}>
                                {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.EMAIL}
                                <Field
                                    type={FORM_FORMIK_BASIC.FORM.TYPES.EMAIL}
                                    name={FORM_FORMIK_BASIC.FORM.INPUTS.EMAIL.NAME}
                                />
                            </label>
                            <ErrorMessage
                                name={FORM_FORMIK_BASIC.FORM.INPUTS.EMAIL.NAME}
                                component="span"
                            />

                            <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.PASSWORD.NAME}>
                                {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.PASSWORD}
                                <Field
                                    type={FORM_FORMIK_BASIC.FORM.TYPES.PASSWORD}
                                    name={FORM_FORMIK_BASIC.FORM.INPUTS.PASSWORD.NAME}
                                />
                            </label>
                            <ErrorMessage
                                name={FORM_FORMIK_BASIC.FORM.INPUTS.PASSWORD.NAME}
                                component="span"
                            />

                            <label className={styles.label} htmlFor={FORM_FORMIK_BASIC.FORM.INPUTS.CONFIRM_PASSWORD.NAME}>
                                {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.CONFIRM_PASSWORD}
                                <Field
                                    type={FORM_FORMIK_BASIC.FORM.TYPES.PASSWORD}
                                    name={FORM_FORMIK_BASIC.FORM.INPUTS.CONFIRM_PASSWORD.NAME}
                                />
                            </label>
                            <ErrorMessage
                                name={FORM_FORMIK_BASIC.FORM.INPUTS.CONFIRM_PASSWORD.NAME}
                                component="span"
                            />

                            <label className={styles.label}>
                                {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.SELECT}
                                <Field
                                    name={FORM_FORMIK_BASIC.FORM.INPUTS.SELECT.NAME}
                                    as="select"
                                >
                                    {FORM_FORMIK_BASIC.FORM.OPTIONS.SELECT.map((option) => (
                                        <option key={option.VALUE} value={option.VALUE}>{option.LABEL}</option>
                                    ))}
                                </Field>
                            </label>
                            <ErrorMessage
                                name={FORM_FORMIK_BASIC.FORM.INPUTS.SELECT.NAME}
                                component="span"
                            />


                            <label className={stylesFormikComponents.labelCheckTerms}>
                                <Field
                                    type={FORM_FORMIK_BASIC.FORM.TYPES.CHECKBOX}
                                    name={FORM_FORMIK_BASIC.FORM.INPUTS.TERMS.NAME} />
                                {FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.TERMS}
                            </label>
                            <ErrorMessage
                                name={FORM_FORMIK_BASIC.FORM.INPUTS.TERMS.NAME}
                                component="span"
                            />

                            <button
                                className={styles.buttonSubmit}
                                type={FORM_FORMIK_BASIC.FORM.BUTTON.TYPE}
                            >
                                {FORM_FORMIK_BASIC.FORM.BUTTON.LABEL}
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
};

export default FormikComponents