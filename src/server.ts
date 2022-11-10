import Fastify from "fastify";
import cors from '@fastify/cors'
import * as dotenv from 'dotenv'
import fastifyRateLimit  from '@fastify/rate-limit'

import { apiRouters } from "./app";

const start = async () =>{

   dotenv.config()


   // start fastify
   const fastify = Fastify({
      // logger: true
   })


   // fastify rate limit
   await fastify.register( fastifyRateLimit, {
      max: 5,
      timeWindow: '1 minute'
   })


   // cors
   await fastify.register(cors);


   // api routes
   apiRouters(fastify);


   // fastify server

   await fastify.listen({ port: 9901 });




   console.log(`⚡ Server Rodando`)

}

start()