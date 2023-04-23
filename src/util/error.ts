import { NextResponse } from "next/server";

class Error {
    constructor(){}


    SignUp(error:any) {

        if(error instanceof EvalError){
            console.log(error.message);

            return NextResponse.json(error.message, {
                status: 406,
                statusText: 'eSUP_QUERY_E001'
            })
        }

        if(error.code === 'P2002'){
            return NextResponse.json(`${error.meta.target} i use`, {
                status: 406,
                statusText: 'eSUP_PRISMA_E002'
            })
        }


    }
}



export default new Error