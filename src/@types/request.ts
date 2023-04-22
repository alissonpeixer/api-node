import { FastifyInstance, FastifyRequest, FastifyRegister } from 'fastify';

export interface PropRes extends FastifyRegister {
    send(mensage: object): any;
    code(code: number): any
}


export interface PropReq extends FastifyRequest {


}