import bcrypt from 'bcrypt'
import { NextResponse } from "next/server";


import prisma from "@/lib/prisma";

import Error from "@/util/error";

import { BaseConvertAuth } from "@/util/basic64/basic";

export async function GET(request: Request) {
    const {status,user,code,message} = BaseConvertAuth(request)

    try {

        if(!status){
            throw new EvalError(message)
        }

        const aUser = await prisma.user.findMany({
            where:{
                username: user?.login
            }
        })

        if(!bcrypt.compareSync(user?.password || '', aUser[0].password)){
            throw new EvalError('PASSWORD & incorrect & 401')
        }

        return NextResponse.json(aUser)
    } catch (error) {
        return Error.SignIn(error)
    }

}