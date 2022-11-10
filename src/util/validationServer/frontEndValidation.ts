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
    var hostname = req.headers.host
    var ip = req.connection.remoteAddress


    if (hostname !== "localhost:9901" && hostname !== "127.0.0.1'"){

        console.log({hostname,ip})

        return false
    }


    return true

}