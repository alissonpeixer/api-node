import bcrypt from 'bcrypt'

class Bcrtypt {

    saltRounds: number

    constructor(){
        this.saltRounds = 3
    }


    EnCode(password:string) {
        return bcrypt.hashSync(password, this.saltRounds);
    }


    DeCode(password:string, dbPassword: string){
       return bcrypt.compareSync(password, dbPassword);
    }
}



export default new Bcrtypt