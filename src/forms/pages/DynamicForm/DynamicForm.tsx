import React from 'react'
//Components:
import { CheckboxInputField, InputTextField, SelectInputField } from '../../components/Forms';
//Data:
import customFormJSON from '../../data/custom-form.json';
//Lib:
import { Formik, Form } from 'formik';
//Utils:
import Utils from '../../../utils/utils';
import { DYNAMIC_FORM } from '../../../utils/const';
import { INPUT_TYPE } from '../../../utils/enum';
//Styles:
import styles from '../Formik/FormikBasic.module.css';

const DynamicForm: React.FC = () => {

    return (
        <div className={styles.containerPage}>
            <h1>{DYNAMIC_FORM.TITLE}</h1>

            <Formik
                initialValues={Utils.getInitialValues(customFormJSON)}
                onSubmit={(values) => console.log({ values })}
            >
                {
                    ({ handleSubmit, resetForm }) => (
                        <Form onSubmit={handleSubmit}>

                            {/* INPUTS DINAMICOS */}
                            {customFormJSON.map(({ type, name, label, placeholder, options }) => {
                                if (type === INPUT_TYPE.SELECT) {
                                    return (
                                        <SelectInputField
                                            key={name}
                                            type={type as INPUT_TYPE}
                                            name={name}
                                            label={label}
                                            placeholder={placeholder}
                                        >
                                            {options && options.map(({ id, value, label }) => (
                                                <option key={id} value={id}>{label}</option>
                                            ))}
                                        </SelectInputField>
                                    )
                                }

                                if (type === INPUT_TYPE.CHECKBOX) {
                                    return (
                                        <CheckboxInputField
                                            key={name}
                                            type={type as INPUT_TYPE}
                                            name={name}
                                            label={label}
                                        />
                                    )
                                }

                                return (
                                    <InputTextField
                                        key={name}
                                        type={type as INPUT_TYPE}
                                        name={name}
                                        label={label}
                                        placeholder={placeholder}
                                    />
                                )
                            })}

                            {/* SUBMIT */}
                            <button 
                                className={styles.buttonSubmit}
                                type={DYNAMIC_FORM.BUTTON.TYPE}
                            >
                                {DYNAMIC_FORM.BUTTON.LABEL}
                            </button>

                            {/* CLEAR */}
                            <button
                                className={styles.buttonClear}
                                type={DYNAMIC_FORM.BUTTON_CLEAR.TYPE}
                                onClick={() => resetForm()}
                            >
                                {DYNAMIC_FORM.BUTTON_CLEAR.LABEL}
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default DynamicForm