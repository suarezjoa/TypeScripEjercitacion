import { Elemento } from "./Elemento";
import { Piedra } from "./Piedra";
import { Papel } from "./Papel";


export class Tijera extends Elemento {
    gana(elemento: Elemento): string {
      return elemento.ganaTijera(this);
    }
    
    ganaPiedra(elemento: Piedra): string {
      return "gana";
    }
    
    ganaPapel(elemento: Papel): string {
      return "pierde";
    }
    
    ganaTijera(elemento: Tijera): string {
      return "empate";
    }
  }