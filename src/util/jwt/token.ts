import jwt from "jsonwebtoken";
import Error from "@/util/error";


export const JwtTokenCreated = ( data : any) =>{


    if(!data.id) {
        throw new EvalError("Data information is requested");
    }



    try {
        return jwt.sign(data,
            process.env.JWT_KEY as string,
            {
                expiresIn: '30d',
                algorithm: "HS256"
            }
        )
    } catch (error) {

        return Error.Jwt(error)


    }



}