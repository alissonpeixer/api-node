import { signup } from './routes/user/signup'
import { signin } from "./routes/user/signin";

export const routers = (fastify : any) => {



    fastify.get('*', async (req:any,res:any)  => {
        return res.send('NotFound')
    });

    fastify.get('/user/signin',  signin);
    fastify.post('/user/signup',  signup);

}