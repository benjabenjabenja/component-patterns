import * as Yup from 'yup';

class Utils {
    static isEmpty(value: string) {
        return value.trim().length <= 0;
    }

    static isEmail(value: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    }

    static checkUsernameAlreadyExist(username: string) {
        const usernameAlreadyExist = 'benja dev';
        return username.toLowerCase() === usernameAlreadyExist.toLowerCase();
    }

    static getInitialValues(formData: any) {
        return formData.reduce((acc: { [key: string]: any }, curr: any) => {
            acc[curr.name] = curr.value;
            return acc;
        }, {});
    }

    static getValidationSchema(formData: any) {
       
        const reduceSchema = formData.reduce((acc: { [key: string]: any }, curr: any) => { 

            if (!curr?.validations || (typeof curr.value !== 'string')) return acc;

            let schema = Yup.string()

            for (const validation of curr.validations) {
                switch (validation.type) {
                    case 'required':
                        schema = schema.required(validation.message);
                        break;
                    case 'minLength':
                        schema = schema.min(validation.value, validation.message);
                        break;
                    case 'maxLength':
                        schema = schema.max(validation.value, validation.message);
                        break;
                    case 'email':
                        schema = schema.email(validation.message);
                        break;
                }
            }
            acc[curr.name] = schema;
            console.log({acc});
            return acc;
        }, {});
       
        return Yup.object({ ...reduceSchema});
    }
}

export default Utils;