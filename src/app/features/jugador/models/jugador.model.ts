export class Jugador {
    id?: number;
    nombre: string;
    apellidos: string;
    dni: string;
    fechaNac: string;

    constructor(jugadorData: any){
        this.nombre=jugadorData.nombre;
        this.apellidos=jugadorData.apellidos;
        this.dni=jugadorData.dni;
        this.fechaNac=jugadorData.fechaNac;
    }

}
