"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DefaultValues {
    constructor() {
    }
    Signup() {
        return {
            name: '',
            surname: '',
            email: '',
            username: '',
            password: '',
            valid: '',
        };
    }
}
exports.default = new DefaultValues;
