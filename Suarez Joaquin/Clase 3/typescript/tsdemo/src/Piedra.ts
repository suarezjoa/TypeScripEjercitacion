import { Elemento } from "./Elemento";
import { Tijera } from "./Tijera";
import { Papel } from "./Papel";

export class Piedra extends Elemento {
    gana(elemento: Elemento): string {
      return elemento.ganaPiedra(this);
    }
    
    ganaPiedra(elemento: Piedra): string {
      return "empate";
    }
    
    ganaPapel(elemento: Papel): string {
      return "gana";
    }
    
    ganaTijera(elemento: Tijera): string {
      return "pierde";
    }
  }