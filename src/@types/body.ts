export type Signup = {
    name: string;
    surname: string;
    email: string;
    username: string;
    password: string;
    valid: boolean;
}


import { FastifyInstance, FastifyRequest, FastifyRegister } from 'fastify';

export interface PropRes extends FastifyRegister {
    send(mensage: object): any;
    code(code: number): any
}


export interface PropReq extends FastifyRequest {


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