import { prisma } from '../../db'
import { JwtTokenCreated } from '../../util/jwt/token'
import { ValidationFrontEnd } from '../../util/validationServer/frontEndValidation';


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
        res.code(401)
        res.send({
            code: 'uE102',
            msg: 'Null'
        })
        return
    }




    try {
        const [,bearerKey] = headers.authorization.split(' ');
        const apiKey = Buffer.from(bearerKey, 'base64').toString('utf8')


        if(!ValidationFrontEnd(req)){
            res.code(403)
            res.send({
                code: 'vE302',
            })

            return
        }


        if(!apiKey) {
            res.code(401)
            res.send({
                code: 'uE103',
                msg: 'apiKey not provided'
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