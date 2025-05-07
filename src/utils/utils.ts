
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
    
}

export default Utils;