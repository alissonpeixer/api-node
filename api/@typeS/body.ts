export type Signup = {
    name: string;
    surname: string;
    email: string;
    username: string;
    password: string;
    valid: boolean;
}


class DefaultValues {
    constructor() {

    }



    Signup(){
        return{
            name: '',
            surname: '',
            email: '',
            username: '',
            password: '',
            valid: '',
        }
    }
}


export default new DefaultValues