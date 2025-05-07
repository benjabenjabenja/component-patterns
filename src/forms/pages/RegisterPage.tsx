import React from 'react';
//Hooks:
import { useForm } from '../hooks/useForm';
//Utils:
import Utils from '../../utils/utils';
import {
    DEFAULT_STATE_REGISTER_FORM,
    REGISTER_PAGE,
    MAX_LENGTH_PASSWORD,
    ERROR_CLASS_INPUT
} from '../../utils/const';
import { METHODS, SIMBOLS } from '../../utils/enum';
//Styles: 
import styles from './RegisterPage.module.css';
import '../styles/styles.css';

const ErrorLabel = ({ children }: { children: React.ReactNode }) => (<span>{children}</span>);


export interface IRegisterPage {
    name: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterPage: React.FC = () => {

    const {
        formData,
        handleInputChange,
        resetForm
    } = useForm<IRegisterPage>(DEFAULT_STATE_REGISTER_FORM);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ values: formData });

        localStorage.setItem('formData', JSON.stringify(formData));
    }

  return (
        <div className={styles.containerPage}>
            <h1>{REGISTER_PAGE.TITLE}</h1>

            <form onSubmit={handleSubmit} method={METHODS.POST}>

                {/* INPUT NAME */}
                <input
                    className={`${Utils.isEmpty(formData?.name) && ERROR_CLASS_INPUT}`}
                    type={REGISTER_PAGE.FORM.TYPES.TEXT}
                    placeholder={REGISTER_PAGE.FORM.PLACEHOLDERS.NAME}
                    name={REGISTER_PAGE.FORM.INPUTS.NAME.NAME}
                    value={formData?.name || SIMBOLS.EMPTY_STRING}
                    onChange={handleInputChange}
                />
                {Utils.isEmpty(formData.name) && (
                  <ErrorLabel>{REGISTER_PAGE.FORM.INPUTS.NAME.ERROR}</ErrorLabel>)}
              
                {/* INPUT USERNAME */}
                <input
                    className={`${Utils.isEmpty(formData?.userName) && ERROR_CLASS_INPUT}`}
                    type={REGISTER_PAGE.FORM.TYPES.TEXT}
                    placeholder={REGISTER_PAGE.FORM.PLACEHOLDERS.USERNAME}
                    name={REGISTER_PAGE.FORM.INPUTS.USERNAME.NAME}
                    value={formData?.userName || SIMBOLS.EMPTY_STRING}
                    onChange={handleInputChange}
                />
                {Utils.isEmpty(formData?.userName) && (
                    <ErrorLabel>{REGISTER_PAGE.FORM.INPUTS.USERNAME.ERROR}</ErrorLabel>)}
                {(formData?.userName && Utils.checkUsernameAlreadyExist(formData.userName)) && (
                    <ErrorLabel>{REGISTER_PAGE.FORM.INPUTS.USERNAME.ERROR_USERNAME_EXIST}</ErrorLabel>
                )}
                
                {/* INPUT EMAIL */}
                <input
                    className={`${(
                        Utils.isEmpty(formData?.email) || 
                        !Utils.isEmail(formData?.email)) && ERROR_CLASS_INPUT}`}
                    type={REGISTER_PAGE.FORM.TYPES.EMAIL}
                    placeholder={REGISTER_PAGE.FORM.PLACEHOLDERS.EMAIL}
                    name={REGISTER_PAGE.FORM.INPUTS.EMAIL.NAME}
                    value={formData?.email || SIMBOLS.EMPTY_STRING}
                    onChange={handleInputChange}
                />
                {Utils.isEmpty(formData.email) && (
                    <ErrorLabel>{REGISTER_PAGE.FORM.INPUTS.EMAIL.ERROR}</ErrorLabel>)}
                {(formData.email && !Utils.isEmail(formData.email)) && (
                    <ErrorLabel>{REGISTER_PAGE.FORM.INPUTS.EMAIL.ERROR_INVALID}</ErrorLabel>)}

                {/* INPUT PASSWORD */}
                <input
                    className={`${(
                        Utils.isEmpty(formData?.password) || 
                        formData?.password?.length < 8) && ERROR_CLASS_INPUT}`}
                    type={REGISTER_PAGE.FORM.TYPES.PASSWORD}
                    placeholder={REGISTER_PAGE.FORM.PLACEHOLDERS.PASSWORD}
                    name={REGISTER_PAGE.FORM.INPUTS.PASSWORD.NAME}
                    value={formData?.password || SIMBOLS.EMPTY_STRING}
                    onChange={handleInputChange}
                />
                {Utils.isEmpty(formData?.password) && (
                    <ErrorLabel>{REGISTER_PAGE.FORM.INPUTS.PASSWORD.ERROR}</ErrorLabel>)}
                {(formData?.password && formData?.password.length < MAX_LENGTH_PASSWORD) && (
                    <ErrorLabel>{REGISTER_PAGE.FORM.INPUTS.PASSWORD.ERROR_INVALID}</ErrorLabel>)}

                {/* INPUT CONFIRM PASSWORD */}
                <input
                    className={`${(
                        Utils.isEmpty(formData?.confirmPassword) || 
                        formData?.confirmPassword !== formData?.password ) && ERROR_CLASS_INPUT}`}
                    type={REGISTER_PAGE.FORM.TYPES.PASSWORD}
                    placeholder={REGISTER_PAGE.FORM.PLACEHOLDERS.CONFIRM_PASSWORD}
                    name={REGISTER_PAGE.FORM.INPUTS.CONFIRM_PASSWORD.NAME}
                    value={formData?.confirmPassword || SIMBOLS.EMPTY_STRING}
                    onChange={handleInputChange}
                />
                {Utils.isEmpty(formData?.confirmPassword) && (
                    <ErrorLabel>{REGISTER_PAGE.FORM.INPUTS.CONFIRM_PASSWORD.ERROR}</ErrorLabel>
                )}
                {(formData?.confirmPassword !== formData?.password) && (
                    <ErrorLabel>{REGISTER_PAGE.FORM.INPUTS.CONFIRM_PASSWORD.ERROR_INVALID}</ErrorLabel>
                )}

                {/* BUTTON REGISTER */}
                <button 
                    type={REGISTER_PAGE.FORM.BUTTON.TYPE}
                    className={styles.registerButton}
                >{REGISTER_PAGE.FORM.BUTTON.LABEL}</button>
                
                {/* BUTTON CLEAR */}
                <button
                    type={REGISTER_PAGE.FORM.BUTTON_CLEAR.TYPE}
                    className={styles.registerButton}
                    onClick={() => resetForm()}
                >{REGISTER_PAGE.FORM.BUTTON_CLEAR.LABEL}</button>
              
          </form>
      </div>
  )
}

export default RegisterPage