
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
    
}

export default Utils;