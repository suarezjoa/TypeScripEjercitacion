import { Elemento } from "./Elemento";
export
class Foto extends Elemento{

    dimension: number;

    constructor(nombre: string,dimension: number){
        super(nombre);
        this.dimension = dimension;
    }

    getDimension(): number{
        return this.dimension
    }
    setDimension(dimension: number){
        this.dimension = dimension
    }


}