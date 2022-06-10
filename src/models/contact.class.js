export class Contact {
    name = "";
    lastName = '';
    email = '';
    conectado = false;

    constructor(name, lastName, email, conectado){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.conectado = conectado
    }
}