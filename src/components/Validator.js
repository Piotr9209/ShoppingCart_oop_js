export class Validator {
    static isEmptyString(stringLikeValue) {
        if (stringLikeValue.length === 0) throw new Error('params must be string');
    }

    static isEmptyNumber(stringLikeValue) {
        if (stringLikeValue < 0) throw new Error('discount must be more than 0');
    }
}