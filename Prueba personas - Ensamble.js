/**
 * *PRUEBA PERSONAS
 */
class Persona{
    //Declaración de variables de clase
    static contadorPersona = 0;
    
    //Declaración del constructor
    constructor(nombre,apellido,edad = 0){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersona;
    }

    //getters
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get edad(){
        return this._edad;
    }

    //setters
    set nombre(nombre){
       this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    set edad(edad){
        this._edad = edad;
    }

    //Metodo toString
    datoCompleto(){
            return `${this._nombre} ${this._apellido} ${this._edad}`;
    }

    toString(){
        return `idP:${this._idPersona} ${this.datoCompleto()} From Cat. Persona`;
    }
}

class Cliente extends Persona{
    //Declaracion de variables
    static contadorCliente = 0;
        
    //Superposicion de variables
    constructor(nombre, apellido, edad, fechaReg = new Date()){
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
        return `idC:${this._idCliente} 
                ${super.datoCompleto()} , 
                fecha: ${this._fechaReg} 
                Cat. Cliente`;
    }
}

class Empleado extends Persona{
    //Declaracion de variables de clase
    static contadorEmpleado = 0;
    //Extensión de variables
    constructor (nombre, apellido, edad, sueldo){
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
        this._sueldo = sueldo;
    }

    //Sobreescritura de toString
    datoCompleto(){
        return `idE: ${this._idEmpleado}
                ${super.datoCompleto()}, 
                $: ${this._sueldo} 
                Cat. Empleado`;
    }
}

//Prueba de la clase persona
let persona1 = new Persona('Juan', 'Perez', '34');
console.log(persona1.toString());

let empleado1 = new Empleado ('Carlos', 'Carranza','34',87000);
console.log(empleado1.toString());

let cliente1 = new Cliente('Miguel','Benitez',30, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Pedro','Aznar',32, new Date());
console.log(cliente1.toString());