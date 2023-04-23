export const BaseConvertAuth = (request : any ) =>{


    const [,basicCode] = request.headers.get('authorization').split(' ')
    const [login,password] = Buffer.from(basicCode, 'base64').toString('utf-8').split(':');


    if(!basicCode){
        return {
            code: 'bE602',
            status: false,
            message: 'NotFound authorization in header'
        }
    }


    return {
        status: true,
        user: {
            login,
            password
        }
    }
}