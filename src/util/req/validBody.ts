import DefaultValues, { Signup }  from "../../@types/body";




class ValidBody {

    bodySingUp: object = DefaultValues.Signup()

    constructor() {}

    signup(body: Signup) {

        let id = 0

        for(let item in this.bodySingUp){
            if(item !== Object.keys(body)[id]){
                return false
            }
            id++
        }

        return true
    }
}


export default new ValidBody