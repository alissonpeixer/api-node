import { notFound } from "./routes/notFound"
import { signup } from './routes/user/signup'
import { signin } from "./routes/user/signin";

export const routers = (fastify : any) => {



    fastify.get('*', notFound);

    // fastify.get('/user/signin',  signin);
    // fastify.post('/user/signup',  signup);

}