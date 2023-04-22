"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtTokenCreated = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JwtTokenCreated = (data) => {
    if (!data.id) {
        throw new Error("Data information is requested");
    }
    try {
        return jsonwebtoken_1.default.sign(data, process.env.JWT_KEY, {
            expiresIn: '30d',
            algorithm: "HS256"
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.JwtTokenCreated = JwtTokenCreated;
