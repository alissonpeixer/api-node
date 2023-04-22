import { PropsResErro } from "./@types"

export const resErro = (data: PropsResErro) => {
    data.res.code(data.status)
    data.res.send(data.body)
    return
}