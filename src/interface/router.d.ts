import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export interface ITRouter {
    method: string;
    path: string;
    handler: (request: FastifyRequest, reply: FastifyReply) => void;
}
