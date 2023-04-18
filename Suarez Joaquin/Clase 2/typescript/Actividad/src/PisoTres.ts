import { Piso } from "./Piso";
export
class PisoTres extends Piso{

    constructor(nombre: string){
        super(nombre);

    }
    entrarAlPiso(): void {
        console.log(`Entrando al piso ${this.nombre}`);
      }
    
      salirDelPiso(): void {
        console.log(`Saliendo del piso ${this.nombre}`);
      }
    
    }