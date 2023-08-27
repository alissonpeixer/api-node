import { FastifyReply, FastifyRequest } from "fastify";

module.exports = {
    method: 'GET',
    path: '/',
    handler: async (request: FastifyRequest, reply: FastifyReply) => {

        return 'SERVER RODANDO!';
    }
};
