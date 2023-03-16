import { Elemento } from "./Elemento";
export
class Carpeta extends Elemento{

    carpeta: Elemento[];
    tamanioCarpeta: number = this.nombre.length;;

    constructor(nombre: string){
        super(nombre);
        this.carpeta = [];
    }

    getCarpeta(): Elemento[]{
        return this.carpeta;
    }

    agregarElementoAcarpeta(elementoAagregar: Elemento){
        this.carpeta.push(elementoAagregar)
    }
    
    obtenerElementoPorid(id: string): Elemento | undefined {
        return this.carpeta.find(carpetas => carpetas.getId() === id);
      }
      tamanioTotalDeTodosLosElementos(): number{
        for(var i = 0 ; i < this.carpeta.length ; i++){
            this.tamanioCarpeta = this.tamanioCarpeta + this.carpeta[i].getTamaño();
        }
        return this.tamanioCarpeta;
      }

}