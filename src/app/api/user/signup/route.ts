import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
import { NextResponse } from "next/server";

import Error from "@/util/error";
import prisma from "@/lib/prisma";
import Bcrtypt  from "@/util/fBcrypt/fBcrypt";
import { JwtTokenCreated } from "@/util/jwt/token";



export async function POST(request: Request) {

    const {searchParams} = new URL(request.url);

    try {

        const name = searchParams.get('name') || false;
        const password = searchParams.get('password') || false;
        const username = searchParams.get('username') || false;

        if(!name || !password || !username){
           throw new EvalError('Query - item not found!');
        }


        const user = await prisma.user.create({
            data:{
                username,
                password: Bcrtypt.EnCode(password),
                name
            }
        })

        const token = JwtTokenCreated({
            id: user.id,
            name: user.name,
            username: user.username,
            password: user.password
        })

        return NextResponse.json({
            id: user.id,
            name: user.name,
            username: user.username,
            token
        })


    } catch (error : any) {
       return Error.SignUp(error)
    }
}
