"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationFrontEnd = void 0;
const ValidationFrontEnd = (req) => {
    const hostname = req.headers.host;
    const ip = req.connection.remoteAddress;
    if (ip !== process.env.WEB_IP) {
        console.log({ hostname, ip });
        return false;
    }
    return true;
};
exports.ValidationFrontEnd = ValidationFrontEnd;
