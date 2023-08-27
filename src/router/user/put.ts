import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../db/prisma";


import app from '../../index'
import { Request } from "../../interface/request";



module.exports = {
    method: ['PUT'],
    path: '/user/:id',
    schema: {
        tags: ['User'],
        summary: 'User update',
        params: {
            id: {
                type: 'string',
                description: 'UUID of the user'
            }
        },
        querystring: {
            name: {
                type: 'string'
            },
            email: {
                type: 'string'
            },
            password: {
                type: 'string'
            }
        },
        response: {
            200: {
                description: 'Returns Users List/Uniq',
                type: 'object',
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
        if (!request.params.id) {
            reply.code(400).send({
                message: 'Bad Request',
            });
        }
    },
    handler: async (request: Request, reply: FastifyReply) => {
        if (request.params.id && request.query) {

            let hashPassword;

            const { name, email, password } = request.query;

            if (password) {
                hashPassword = await app.bcrypt.hash(password)
            }


            return await prisma.user.update({
                where: { id: request.params.id },
                data: {
                    name,
                    email,
                    password: hashPassword
                }
            })
        } else {
            return reply.status(400).send({
                message: 'Bad Request'
            })
        }
    }
};
