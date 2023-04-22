import { prisma } from '../../db'
import { JwtTokenCreated } from '../../util/jwt/token'
import { ValidationFrontEnd } from '../../util/validationServer/frontEndValidation';
import { resErro } from '../../util/res/erro';
import ValidBody  from '../../util/req/validBody';

export interface PropRes {
    send(mensage: object): any;
    code(code: number): any
}

interface CreatedReq {
    body: {
        name: string;
        surname: string;
        email: string;
        username: string;
        password: string;
        valid: boolean;
    },
    headers: {
        authorization: string;
        host: string
    },
    connection: {
        remoteAddress: string
    }
}


export const signup = async (req : CreatedReq , res : PropRes) => {


    const body = req.body
    const headers = req.headers


    if(!headers.authorization){
        resErro(res, 404, {
            code: 'resE101',
            msg: 'isNull'
        })
        return
    }

    if(!ValidBody.signup(req.body)){
        resErro(res, 406, {
            code: 'resE102',
            msg: 'Body NotFound'
        })
        return
    }

    try {
        if(!ValidationFrontEnd(req)){
            resErro(res, 405, {
                code: 'vE302',
                msg: 'Invalid WebServe'
            })
            return
        }


        const user = await prisma.user.create({
            data: {
                name: body.name,
                surname: body.surname,
                email: body.email,
                password: body.password,
                username: body.username
            }
        })



        const token = JwtTokenCreated({
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password
        })



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
        })



    } catch (error : any ) {



        console.log(error)



        if(error.code === 'P2002' ){

            res.code(402)
            res.send({
                code: 'uE104',
                msg: 'Username and email are already in use'
            })
            return
        }





    }


}