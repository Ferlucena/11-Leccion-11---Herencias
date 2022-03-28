class Cliente extends Persona{
    //Declaracion de variables de clase
    static contadorCliente = 0;
    //Declaración de un objeto de clase
    fechaReg = new Date();
    //Superposicion de variables
    constructor(fechaReg ){
        super(nombre, apellido, edad);
        this._fechaReg = fechaReg;
        this._idCliente = ++Cliente.contadorCliente;
    }

    //Getters
    get idCliente(){
        return this._idCliente;
    }
    get fechaReg(){
        return this._fechaReg;         
    }

    //Setters
    set fechaReg(fechaReg){
        this._fechaReg = fechaReg;
    }

    //Reescritura toString
    datoCompleto(){
        return `${this.idCliente} 
                ${super.datoCompleto}, 
                ${this.fechaReg} 
                Cat. Cliente`;
    }

    toString(){
        return super.toString;
    }
}