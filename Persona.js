/**
 * *EJERCICIO PRÁCTICO DE HERENCIAS
 **/

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
         return `${this.nombre} 
                 ${this.apellido} 
                 ${this.edad}`;
     }
     toString(){
         return `${this.datoCompleto} 
                 ${this.idPersona}
                 Cat. Persona`;
     }
 }
