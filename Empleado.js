class Empleado extends Persona{
    //Declaracion de variables de clase
    static contadorEmpleado = 0;
    //Extensión de variables
    constructor (sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado; 
    }

    //Getters
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    
    //Setters
    set sueldo(sueldo){
        this.sueldo = sueldo;
    }

    //Sobreescritura de toString
    datoCompleto(){
        return `${this.idEmpleado} 
                ${super.datoCompleto()}, 
                ${this.sueldo} 
                Cat. Empleado`;
    }
}