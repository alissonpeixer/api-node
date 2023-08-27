import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../db/prisma";
import { Request } from "../../interface/request";



module.exports = {
    method: ['GET'],
    path: '/user',
    schema: {
        tags: ['User'],
        summary: 'Uniq user by id',
        description: 'Get uniq user',
        querystring: {
            id: { type: 'string' }
        },
        response: {
            200: {
                description: 'Returns Users List/Uniq',
                type: 'array',
                properties: {
                    id: {
                        type: 'string'
                    },
                    name: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    }
                }
            },

        }
    },

    preHandler: async (request: Request, reply: FastifyReply) => {
        // if (!request.query.id) {
        //     reply.code(400).send({
        //         message: 'Bad Request',
        //     });
        // }
    },

    handler: async (request: Request, reply: FastifyReply) => {
        const { id } = request.query;

        if (id) {
            return [
                await prisma.user.findFirst({
                    where: {
                        id
                    },
                    select: {
                        email: true,
                        id: true,
                        name: true,
                        password: false
                    }
                })
            ]
        } else {
            return await prisma.user.findMany({
                select: {
                    email: true,
                    id: true,
                    name: true,
                    password: false
                }
            });
        }

    }
};
