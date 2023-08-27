import { FastifyRequest } from "fastify";

export interface Request extends FastifyRequest {
    params: {
        id: string;
    }
    query: {
        id: string;
        name: string;
        email: string;
        password: string;
    }
}