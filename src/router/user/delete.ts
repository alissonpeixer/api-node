import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../db/prisma";
import { Request } from "../../interface/request";







module.exports = {
    method: ['DELETE'],
    path: '/user/:id',
    schema: {
        tags: ['User'],
        summary: 'User delete',

        params: {
            id: {
                type: 'string',
                description: 'UUID of the user'
            }
        },
        response: {
            200: {
                description: 'Returns Users List',
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    },
                    code: {
                        type: 'number'
                    }
                }
            }
        }
    },
    preHandler: async (request: Request, reply: FastifyReply) => {
        if (!request.params.id) {
            reply.code(400).send({
                message: 'Bad Request',
            });
        }
    },
    handler: async (request: Request, reply: FastifyReply) => {
        if (request.params.id) {
            return await prisma.user.delete({
                where: { id: request.params.id }
            })
        } else {
            return reply.status(400).send({
                message: 'Bad Request'
            })
        }
    }
};
