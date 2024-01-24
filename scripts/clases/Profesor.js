import Usuario from "./Usuario.js"

export default class Profesor extends Usuario {
    constructor(nombre, apellido, correo, activo) {
        super(nombre,apellido,correo,activo)
       
    }
    
    getNombre() {
        return this.nombre
    }
    setNombre(nombre) {
        this.nombre = nombre
    }

    getApellido() {
        return this.apellido
    }
    setApellido(apellido) {
        this.apellido = apellido
    }
    getCorreo() {
        return this.correo
    }
    setCorreo(correo) {
        this.correo = correo
    }
    
    getActivo() {
        return this.activo
    }

    setActivo(activo) {
        this.activo = activo
    }

    
}