import React, { useEffect, useState } from 'react'
//Utils:
import { DEFAULT_STATE_REGISTER_FORM, REGISTER_PAGE, SIMBOLS } from '../../utils/const';
//Styles: 
import '../styles/styles.css';
import { METHODS } from '../../utils/enum';

const RegisterPage: React.FC = () => {

    const [formData, setFormData] = useState(DEFAULT_STATE_REGISTER_FORM);

    useEffect(() => {
        if (
            formData.name === '' &&
            formData.email === '' &&
            formData.password === '' &&
            formData.confirmPassword === ''
        ) return;

        return () => {
            setFormData(DEFAULT_STATE_REGISTER_FORM);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ values: formData });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

  return (
      <div>
          <h1>{REGISTER_PAGE.TITLE}</h1>

          <form onSubmit={handleSubmit} method={METHODS.POST}>

                {/* INPUT NAME */}
                <input
                    type={REGISTER_PAGE.FORM.TYPES.TEXT}
                    placeholder={REGISTER_PAGE.FORM.PLACEHOLDERS.NAME}
                    name={REGISTER_PAGE.FORM.INPUTS.NAME}
                    value={formData?.name || SIMBOLS.EMPTY_STRING}
                    onChange={handleChange}
                />

                {/* INPUT EMAIL */}
                <input
                    type={REGISTER_PAGE.FORM.TYPES.EMAIL}
                    placeholder={REGISTER_PAGE.FORM.PLACEHOLDERS.EMAIL}
                    name={REGISTER_PAGE.FORM.INPUTS.EMAIL}
                    value={formData?.email || SIMBOLS.EMPTY_STRING}
                    onChange={handleChange}
                />

                {/* INPUT PASSWORD */}
                <input
                    type={REGISTER_PAGE.FORM.TYPES.PASSWORD}
                    placeholder={REGISTER_PAGE.FORM.PLACEHOLDERS.PASSWORD}
                    name={REGISTER_PAGE.FORM.INPUTS.PASSWORD}
                    value={formData?.password || SIMBOLS.EMPTY_STRING}
                    onChange={handleChange}
                />

                {/* INPUT CONFIRM PASSWORD */}
                <input
                    type={REGISTER_PAGE.FORM.TYPES.PASSWORD}
                    placeholder={REGISTER_PAGE.FORM.PLACEHOLDERS.CONFIRM_PASSWORD}
                    name={REGISTER_PAGE.FORM.INPUTS.CONFIRM_PASSWORD}
                    value={formData?.confirmPassword || SIMBOLS.EMPTY_STRING}
                    onChange={handleChange}
                />

                {/* BUTTON REGISTER */}
                <button type={REGISTER_PAGE.FORM.BUTTON.TYPE}>{REGISTER_PAGE.FORM.BUTTON.LABEL}</button>
              
          </form>
      </div>
  )
}

export default RegisterPage