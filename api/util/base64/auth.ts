export const BaseConvertAuth = (data : any ) =>{
    const [,basicCode] = data.headers.authorization.split(' ')
    const [login,password] = Buffer.from(basicCode, 'base64').toString('utf-8').split(':');


    if(!data.headers.authorization){
        return {
            code: 'bE602',
            status: false,
            message: 'NotFound authorization in header'
        }
    }

    if(!basicCode){
        return {
            code: 'bE603',
            status: false,
            message: 'base64 code invalid'
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