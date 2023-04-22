
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_1 = __importDefault(require("../../@typeS/body"));
class ValidBody {
    constructor() {
        this.bodySingUp = body_1.default.Signup();
    }
    signup(body) {
        let id = 0;
        for (let item in this.bodySingUp) {
            if (item !== Object.keys(body)[id]) {
                return false;
            }
            id++;
        }
        return true;
    }
}
exports.default = new ValidBody;
