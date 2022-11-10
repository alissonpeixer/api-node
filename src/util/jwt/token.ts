import jwt from "jsonwebtoken";

interface Props {
    id: string;
    username: string;
    email: string;
    password: string;
}

export const JwtTokenCreated = ( data : Props) =>{


    if(!data.id) {
        throw new Error("Data information is requested");
    }



    try {
        return jwt.sign(
            {data},
            process.env.JWT_KEY as string,
            {
                expiresIn: '30d',
                algorithm: "HS256"
            }
        )
    } catch (error) {

        console.log(error)


    }



}