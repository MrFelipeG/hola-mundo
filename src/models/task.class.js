
export class Task {
    name = '';
    Apellido = '';
    conectado = false ;
    email = '';

    constructor(name, description, completed, email){
        this.name = name;
        this.Apellido = description;
        this.conectado = completed;
        this.email = email
    }


}