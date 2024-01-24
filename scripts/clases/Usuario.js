export default class Usuario{
    constructor(nombres, apellidos, correo, activo) {
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.correo = correo,
        this.activo = activo
    }

    getNombres() {
        return this.nombres
    }

    getApellidos() {
        return this.apellidos
    }

    getCorreo() {
        return this.correo
    }

    getActivo() {
        return this.activo
    }

    setNombres(nombres) {
        this.nombres = nombres
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos
    }

    setCorreo(correo) {
        this.correo = correo
    }

    setActivo(activo) {
        this.activo = activo
    }
}