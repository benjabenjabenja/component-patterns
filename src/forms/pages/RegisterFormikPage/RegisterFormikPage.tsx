import React from 'react'
//Interfaces:
import { IRegisterPage } from '../RegisterPage/RegisterPage';
//Utils:
import {
    REGISTER_FORMIK_PAGE,
} from '../../../utils/const';
import { registerFormikSchemaValidators } from '../../../utils/validators';
//Styles: 
import styles from '../RegisterPage/RegisterPage.module.css';
import '../../styles/styles.css';
//Lib:
import { Form, Formik } from 'formik';
import { InputTextField } from '../../components/Forms';


export type IRegisterFormikPage = Pick<IRegisterPage, 'name' | 'email' | 'password' | 'confirmPassword'>;

const RegisterFormikPage: React.FC = () => {

    const handleSubmit = (values: IRegisterFormikPage) => {
        console.log({ values });
    }
    
    return (
        <div className={styles.containerPage}>
            <h1>{REGISTER_FORMIK_PAGE.TITLE}</h1>

            <Formik
                initialValues={REGISTER_FORMIK_PAGE.INITIAL_VALUES}
                onSubmit={handleSubmit}
                validationSchema={registerFormikSchemaValidators}
            >
                {({
                    handleSubmit,
                    resetForm
                }) => (

                    <Form onSubmit={handleSubmit} noValidate>
                        {/* NAME */}
                        <InputTextField
                            label={REGISTER_FORMIK_PAGE.FORM.PLACEHOLDERS.NAME}
                            name={REGISTER_FORMIK_PAGE.FORM.INPUTS.NAME.NAME}
                            placeholder={REGISTER_FORMIK_PAGE.FORM.PLACEHOLDERS.NAME}
                        />

                        {/* EMAIL */}
                        <InputTextField
                            label={REGISTER_FORMIK_PAGE.FORM.PLACEHOLDERS.EMAIL}
                            name={REGISTER_FORMIK_PAGE.FORM.INPUTS.EMAIL.NAME}
                            placeholder={REGISTER_FORMIK_PAGE.FORM.PLACEHOLDERS.EMAIL}
                        />

                        {/* PASSWORD */}
                        <InputTextField
                            label={REGISTER_FORMIK_PAGE.FORM.PLACEHOLDERS.PASSWORD}
                            name={REGISTER_FORMIK_PAGE.FORM.INPUTS.PASSWORD.NAME}
                            placeholder={REGISTER_FORMIK_PAGE.FORM.PLACEHOLDERS.PASSWORD}
                            type={REGISTER_FORMIK_PAGE.FORM.TYPES.PASSWORD as any}
                        />

                        {/* CONFIRM PASSWORD */}
                        <InputTextField
                            label={REGISTER_FORMIK_PAGE.FORM.PLACEHOLDERS.CONFIRM_PASSWORD}
                            name={REGISTER_FORMIK_PAGE.FORM.INPUTS.CONFIRM_PASSWORD.NAME}
                            placeholder={REGISTER_FORMIK_PAGE.FORM.PLACEHOLDERS.CONFIRM_PASSWORD}
                            type={REGISTER_FORMIK_PAGE.FORM.TYPES.PASSWORD as any}
                        />

                        {/* BUTTON REGISTER */}
                        <button
                            type={REGISTER_FORMIK_PAGE.BUTTON.TYPE}
                            className={styles.registerButton}
                        >{REGISTER_FORMIK_PAGE.BUTTON.LABEL}</button>
                    
                        {/* BUTTON CLEAR */}
                        <button
                            type={REGISTER_FORMIK_PAGE.BUTTON_CLEAR.TYPE}
                            className={styles.registerButton}
                            onClick={() => resetForm()}
                        >{REGISTER_FORMIK_PAGE.BUTTON_CLEAR.LABEL}</button>
                
                    </Form>
                    
                )}
            </Formik>
        </div>
    )
};

export default RegisterFormikPage