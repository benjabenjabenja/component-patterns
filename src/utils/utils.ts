
class Utils {
    static isEmpty(value: string) {
        return value.trim().length <= 0;
    }

    static isEmail(value: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    }
    
    
}

export default Utils;