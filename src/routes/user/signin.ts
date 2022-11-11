
import { prisma } from "../../db";
import { BaseConvertAuth } from "../../util/base64/auth";
import { JwtTokenCreated } from "../../util/jwt/token";


export const signin = async ( req : any, res : any ) => {

    const data  = BaseConvertAuth(req)



    try {

        if(!data.status){
            res.code(403)
            return res.send({
                code: data.code,
                msg: data.message
            })
        }


        const [userData] = await prisma.user.findMany({
            where: {
                email: data.user?.login
            }
        })



        if(!userData){
            res.code(404)
            return res.send({
                code: 'sE802',
                msg: 'Login NotFound'
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

        console.log(error)


    }







    return res.send('Salve')
}