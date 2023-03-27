import { Piso } from "./Piso";
import { PlantaBaja } from "./PlantaBaja";

export class Ascensor{

    pisoActual: Piso;
    historial: string[];
    arrayPiso: Piso[];


    constructor(){
        this.pisoActual = new PlantaBaja("PlantaBaja");
        this.historial = ["PlantaBaja"];
        this.arrayPiso  = [];
    }
    
    getPisoActualNombre(): string{
        return this.pisoActual.getNombre()  ;
    }
    setPisoActualNombre(nombre: string) {
        this.pisoActual.setNombre(nombre);
    }
    getPisoActual(): Piso{
        return this.pisoActual;
    }
    setPisoActual(piso: Piso){
        this.pisoActual = piso;
    }
    agregarPiso(pisoAagragar: Piso){
        this.arrayPiso.push(pisoAagragar);
    }

    irA(destino: Piso): Piso {
        // Obtener el índice del piso actual en el array de pisos
        const indiceActual = this.arrayPiso.findIndex(p => p.nombre === this.pisoActual.nombre);
        
        // Obtener el índice del destino en el array de pisos
        const indiceDestino = this.arrayPiso.findIndex(p => p.nombre === destino.nombre);
        
        // Navegar hacia arriba o hacia abajo según los índices, Guarda tambien en el historial
        let direccion = indiceDestino - indiceActual;
        if(direccion > 0){
          for(let i = 1; i <= direccion; i++){
            this.historial.push(this.arrayPiso[indiceActual+i].nombre);
          }
        } else {
          for(let i = -1; i >= direccion; i--){
            this.historial.push(this.arrayPiso[indiceActual+i].nombre);
          }
        }
        
        // Actualizar el piso actual
        this.pisoActual = destino;
        
        return destino;
      }
    getHistorial(){
        return this.historial;
    }

}