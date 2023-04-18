import { Elemento } from "./Elemento";
export
class Carpeta extends Elemento{

    carpeta: Elemento[];

    constructor(nombre: string){
        super(nombre);
        this.carpeta = [];
    }

    getCarpeta(): Elemento[]{
        return this.carpeta;
    }

    agregarElementoAcarpeta(elementoAagregar: Elemento){
        this.carpeta.push(elementoAagregar)
        this.tamaño = this.tamaño + elementoAagregar.getTamaño();
    }
    
    obtenerElementoPorid(id: string): Elemento | undefined {
        return this.carpeta.find(carpetas => carpetas.getId() === id);
      }

}