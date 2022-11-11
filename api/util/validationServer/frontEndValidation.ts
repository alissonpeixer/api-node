interface Props {
    headers: {
        authorization: string;
        host: string
    },
    connection: {
        remoteAddress: string
    }
}

export const ValidationFrontEnd = ( req : Props) => {
    const hostname = req.headers.host
    const ip = req.connection.remoteAddress


    if (hostname !== process.env.WEB_HOSTNAME ){

        console.log({hostname,ip})

        return false
    }


    return true

}