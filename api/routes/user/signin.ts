
import { prisma } from "../../db";
import { BaseConvertAuth } from "../../util/base64/auth";
import { JwtTokenCreated } from "../../util/jwt/token";
import { resErro } from '../../util/res/erro';

export const signin = async ( req : any, res : any ) => {

    const data  = BaseConvertAuth(req)

    try {
        if(!data.status){

            resErro({
                res: res,
                status: 403,
                body: {
                    code: data.code,
                    msg: data.message
                }
            })

        }


        const [userData] = await prisma.user.findMany({
            where: {
                username: data.user?.login
            }
        })

        if(!userData){
            resErro({
                res: res,
                status: 404,
                body: {
                    code: 'sE802',
                    msg: 'Login NotFound'
                }
            })
        }

        res.send({
            code:'sC802',
            msg: 'Loged',
            user:{
                id: userData.id,
                username: userData.username,
                name: userData.name,
                surname: userData.surname,
                token: JwtTokenCreated(userData)
            }
        })


    } catch (error) {
        resErro({
            res: res,
            status: 500,
            body: {
                code:'null',
                msg: 'erro',
                detailed: error
            }
        })
    }

}