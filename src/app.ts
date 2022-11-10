import { notFound } from "./routes/notFound"
import { created } from './routes/user/createdAccount'

export const apiRouters = (fastify : any) => {



    fastify.get('*', notFound);

    fastify.post('/user/created',  created)




}