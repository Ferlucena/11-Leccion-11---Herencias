class Cliente extends Persona{
    //Declaracion de variables
    static contadorCliente = 0;
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
        return this._fechaReg = fechaReg;
    }

    //Reescritura toString
    datoCompleto(){
        return `${this._idCliente} 
                ${super.datoCompleto}, 
                ${this._fechaReg} 
                Cat. Cliente`;
    }

    toString(){
        return super.toString;
    }
}