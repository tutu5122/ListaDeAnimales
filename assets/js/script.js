class Propietario{
    constructor(nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;

    }
    datosPropietarios(){
        return (`Nombre del dueño es: ${this.nombre}. El domiciolio es: ${this.direccion}. El numero de contacto: ${this.telefono} `)
    }
}

class Animal extends Propietario{
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono);
        this.tipoAnimal  = tipo
    }

    get getTipo() {
        return (`El tipo de animal es un: ${this.tipoAnimal}`)
    }

}

class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedadMascota) {
        super(nombre, direccion, telefono, tipo);
        this.nombreMascota = nombreMascota;
        this.enfermedadMascota = enfermedadMascota;
    }
    get nombrem() {
        return this.nombreMascota;
    }
    set nombrem(nuevoNombre) {
        this.nombreMascota = nuevoNombre;
    }
    get enfermedad() {
        return this.enfermedadMascota;
    }
    set enfermedad(nuevaEnfermedad) {
        this.enfermedadMascota = nuevaEnfermedad;
    }
}

let formulario = document.getElementById('form');

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    let nombre = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;   
    let enfermedadMascota = document.getElementById('enfermedad').value;

    let mascota = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedadMascota);
 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<ul"><li>${mascota.datosPropietarios()}</li><li>${mascota.getTipo}, mientras que el nombre de la mascota es: ${mascota.nombreMascota} y la enfermedad es: ${mascota.enfermedadMascota}</li></ul>`;
    
})


