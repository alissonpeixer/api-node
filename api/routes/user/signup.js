var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const db_1 = require("../../db");
const token_1 = require("../../util/jwt/token");
const erro_1 = require("../../util/res/erro");
const validBody_1 = __importDefault(require("../../util/req/validBody"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const headers = req.headers;
    if (!headers.authorization) {
        (0, erro_1.resErro)({
            res,
            status: 404,
            body: {
                code: 'resE101',
                msg: 'isNull'
            }
        });
        return;
    }
    if (!validBody_1.default.signup(body)) {
        (0, erro_1.resErro)({
            res: res,
            status: 404,
            body: {
                code: 'resE102',
                msg: 'Body NotFound'
            }
        });
        return;
    }
    try {
        // if(!ValidationFrontEnd(req)){
        //     resErro(res, 405, {
        //         code: 'vE302',
        //         msg: 'Invalid WebServe'
        //     })
        //     return
        // }
        const user = yield db_1.prisma.user.create({
            data: {
                name: body.name,
                surname: body.surname,
                email: body.email,
                password: body.password,
                username: body.username
            }
        });
        const token = (0, token_1.JwtTokenCreated)({
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password
        });
        return res.send({
            code: 'uC202',
            msg: 'Created account successfully!',
            data: {
                id: user.id,
                name: user.name,
                surname: user.surname,
                username: user.username,
                acessToken: token
            }
        });
    }
    catch (error) {
        console.log(error);
        if (error.code === 'P2002') {
            res.code(402);
            res.send({
                code: 'uE104',
                msg: 'Username and email are already in use'
            });
            return;
        }
    }
});
exports.signup = signup;
