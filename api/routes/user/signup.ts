import { prisma } from '../../db'
import { JwtTokenCreated } from '../../util/jwt/token'
import { ValidationFrontEnd } from '../../util/validationServer/frontEndValidation';
import { resErro } from '../../util/res/erro';
import ValidBody  from '../../util/req/validBody';
import { PropReq, PropRes } from '../../@typeS/request';
import { Signup } from '../../@typeS/body';

export const signup = async (req : PropReq , res : PropRes) => {


    const body = req.body as Signup
    const headers = req.headers


    if(!headers.authorization){
        resErro({
            res,
            status: 404,
            body: {
                code: 'resE101',
                msg: 'isNull'
            }
        })
        return
    }

    if(!ValidBody.signup(body)){
        resErro({
            res: res,
            status: 404,
            body: {
                code: 'resE102',
                msg: 'Body NotFound'
            }
        })
        return
    }

    try {
        // if(!ValidationFrontEnd(req)){
        //     resErro(res, 405, {
        //         code: 'vE302',
        //         msg: 'Invalid WebServe'
        //     })
        //     return
        // }


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