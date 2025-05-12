import React from 'react'
//Components:
import {
    InputTextField,
    SelectInputField,
    CheckboxInputField
} from '../../components/Forms';
//Interfaces:
import { IFormikBasic } from '../Formik/FormikBasic';
//Lib:
import { Formik, Form } from 'formik';
//Utils:
import {
    DEFAULT_STATE_FORMIK_BASIC,
    FORM_FORMIK_BASIC
} from '../../../utils/const';
import { registerSchemaValidators } from '../../../utils/validators';
//Styles:
import styles from '../Formik/FormikBasic.module.css';

const FormikAbstract: React.FC = () => {

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

                            {/* NAME */}
                            <InputTextField
                                label={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.NAME}
                                name={FORM_FORMIK_BASIC.FORM.INPUTS.NAME.NAME}
                                placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.NAME}
                            />

                            {/* USERNAME */}
                            <InputTextField
                                label={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.USERNAME}
                                name={FORM_FORMIK_BASIC.FORM.INPUTS.USERNAME.NAME}
                                placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.USERNAME}
                            />

                            {/* EMAIL */}
                            <InputTextField
                                label={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.EMAIL}
                                name={FORM_FORMIK_BASIC.FORM.INPUTS.EMAIL.NAME}
                                placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.EMAIL}
                            />
                            
                            {/* PASSWORD */}
                            <InputTextField
                                label={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.PASSWORD}
                                name={FORM_FORMIK_BASIC.FORM.INPUTS.PASSWORD.NAME}
                                placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.PASSWORD}
                            />

                            {/* CONFIRM PASSWORD */}
                            <InputTextField
                                label={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.CONFIRM_PASSWORD}
                                name={FORM_FORMIK_BASIC.FORM.INPUTS.CONFIRM_PASSWORD.NAME}
                                placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.CONFIRM_PASSWORD}
                            />

                            {/* SELECT */}
                            <SelectInputField
                                label={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.SELECT}
                                name={FORM_FORMIK_BASIC.FORM.INPUTS.SELECT.NAME}
                                placeholder={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.SELECT}
                            >
                                {FORM_FORMIK_BASIC.FORM.OPTIONS.SELECT.map((option) => (
                                    <option key={option.VALUE} value={option.VALUE}>{option.LABEL}</option>
                                ))}
                            </SelectInputField>
                            
                            {/* TERMS (CHECKBOX)*/}
                            <CheckboxInputField
                                label={FORM_FORMIK_BASIC.FORM.PLACEHOLDERS.TERMS}
                                name={FORM_FORMIK_BASIC.FORM.INPUTS.TERMS.NAME}
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

export default FormikAbstract