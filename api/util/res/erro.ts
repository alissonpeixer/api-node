type SendTypes =  {
    code: string;
    msg: string
}


export interface PropRes {
    send(mensage: SendTypes): any;
    code(number: number): any
}


export const resErro = (res : PropRes, status:number, body:SendTypes) => {
    res.code(status)
    res.send({ ...body })
    return
}