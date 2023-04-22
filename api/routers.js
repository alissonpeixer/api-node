Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
const notFound_1 = require("./routes/notFound");
const signup_1 = require("./routes/user/signup");
const signin_1 = require("./routes/user/signin");
const routers = (fastify) => {
    fastify.get('*', notFound_1.notFound);
    fastify.get('/user/signin', signin_1.signin);
    fastify.post('/user/signup', signup_1.signup);
};
exports.routers = routers;
