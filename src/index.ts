import Fastify from "fastify";
import cors from '@fastify/cors'
import * as dotenv from 'dotenv'
import fastifyRateLimit  from '@fastify/rate-limit'

import { routers } from "./routers";

dotenv.config()


   // start fastify
   const fastify = Fastify({
      // logger: true
   })


   // fastify rate limit
   fastify.register( fastifyRateLimit, {
      max: 5,
      timeWindow: '1 minute'
   })


   // cors
   fastify.register(cors);


   // api routes
   routers(fastify);


   // fastify server

   fastify.listen({ port: 9901, host: 'localhost' });



   console.log(`⚡ Server Rodando 🚪 9901`)