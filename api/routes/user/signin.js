var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = void 0;
const db_1 = require("../../db");
const auth_1 = require("../../util/base64/auth");
const token_1 = require("../../util/jwt/token");
const erro_1 = require("../../util/res/erro");
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const data = (0, auth_1.BaseConvertAuth)(req);
    try {
        if (!data.status) {
            (0, erro_1.resErro)({
                res: res,
                status: 403,
                body: {
                    code: data.code,
                    msg: data.message
                }
            });
        }
        const [userData] = yield db_1.prisma.user.findMany({
            where: {
                username: (_a = data.user) === null || _a === void 0 ? void 0 : _a.login
            }
        });
        if (!userData) {
            (0, erro_1.resErro)({
                res: res,
                status: 404,
                body: {
                    code: 'sE802',
                    msg: 'Login NotFound'
                }
            });
        }
        res.send({
            code: 'sC802',
            msg: 'Loged',
            user: {
                id: userData.id,
                username: userData.username,
                name: userData.name,
                surname: userData.surname,
                token: (0, token_1.JwtTokenCreated)(userData)
            }
        });
    }
    catch (error) {
        (0, erro_1.resErro)({
            res: res,
            status: 500,
            body: {
                code: 'null',
                msg: 'erro',
                detailed: error
            }
        });
    }
});
exports.signin = signin;
