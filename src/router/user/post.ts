import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../db/prisma";

import app from '../../index'
import { Request } from "../../interface/request";





module.exports = {
    method: ['POST'],
    path: '/user',
    schema: {
        tags: ['User'],
        summary: 'User create',
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
        require: ['name', 'email', 'password'],
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

    },

    handler: async (request: Request, reply: FastifyReply) => {
        console.log(request.method)
        console.log(request.query);
        if (request.method === 'POST' && request.query) {

            return await prisma.user.create({
                data: {
                    name: request.query.name,
                    email: request.query.email,
                    password: await app.bcrypt.hash(request.query.password)
                }
            })
        }
    }
};
