export abstract class Piso {

    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    abstract entrarAlPiso(): void;
  
    abstract salirDelPiso(): void;
  
    getNombre(): string {
      return this.nombre;
    }
  
    setNombre(nombre: string): void {
      this.nombre = nombre;
    }
}