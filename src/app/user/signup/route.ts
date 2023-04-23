import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
import { NextResponse } from "next/server";

import Error from "@/util/error";
import prisma from "@/lib/prisma";
import Bcrtypt  from "@/util/bcrypt/Bcrtypt";



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


        return NextResponse.json({user})


    } catch (error : any) {
       return Error.SignUp(error)
    }
}
