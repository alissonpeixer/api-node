
type SendTypes =  {
    code: string;
    msg: string
}


type FuncType = {
    send(mensage: SendTypes): any;
    code(number: number): any
}

export interface PropsResErro {
    res: FuncType;
    status: number;
    body: {
        code: string | any;
        msg: string | any;
        detailed?: any;
    }
}

export const resErro = (data: PropsResErro) => {
    data.res.code(data.status)
    data.res.send(data.body)
    return
}