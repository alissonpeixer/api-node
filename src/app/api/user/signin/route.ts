import { NextResponse } from "next/server";


import prisma from "@/lib/prisma";
import Error from "@/util/error";
import Bcrtypt  from "@/util/fBcrypt/fBcrypt";
import { BaseConvertAuth } from "@/util/basic64/basic";
import { JwtTokenCreated } from "@/util/jwt/token";

export async function GET(request: Request) {
    const {status,user,code,message} = BaseConvertAuth(request)


    try {

        if(!status){
            throw new EvalError(message)
        }

        const [aUser] = await prisma.user.findMany({
            where:{
                username: user?.login
            }
        })

        if(!Bcrtypt.DeCode(user?.password || '',aUser.password)){
            throw new EvalError('PASSWORD & incorrect & 401')
        }

        const token = JwtTokenCreated({
            id: aUser.id,
            name: aUser.name,
            username: aUser.username,
            password: aUser.password
        })

        return NextResponse.json({
            id: aUser.id,
            name: aUser.name,
            username: aUser.username,
            token
        })
    } catch (error) {
        return Error.SignIn(error)
    }

}