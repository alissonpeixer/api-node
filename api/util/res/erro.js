"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resErro = void 0;
const resErro = (data) => {
    data.res.code(data.status);
    data.res.send(data.body);
    return;
};
exports.resErro = resErro;
