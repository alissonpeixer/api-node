export const BaseConvertAuth = (data : any ) =>{


    if(!data.headers.authorization){
        return {
            code: 'bE602',
            status: false,
            message: 'NotFound authorization in header'
        }
    }



    const [,basicCode] = data.headers.authorization.split(' ')
    const [login,password] = Buffer.from(basicCode, 'base64').toString('utf-8').split(':');





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