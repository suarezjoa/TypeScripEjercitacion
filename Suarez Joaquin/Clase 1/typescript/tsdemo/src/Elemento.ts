import { v4 as uuidv4 } from 'uuid';
export

abstract class Elemento{

    nombre: string;
    tamaño: number;
    readonly id: string;

    constructor(nombre: string){
        this.nombre = nombre;
        this.tamaño = this.ObtenerTamaño();
        this.id = uuidv4();
    }

    getNombre() : string{
        return this.nombre;
    }
    setNombre(nombre: string){
        this.nombre = nombre;
    }

    getTamaño() : number{
        return this.tamaño;
    }
    setTamaño(tamaño: number){
        this.tamaño = tamaño;
    }
    getId() : string{
        return this.id;
        }
    ObtenerTamaño() : number{
        return this.nombre.length;
    }
}