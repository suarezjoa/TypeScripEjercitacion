import { Elemento } from "./Elemento";
import { Piedra } from "./Piedra";
import { Tijera } from "./Tijera";

export class Papel extends Elemento {
    gana(elemento: Elemento): string {
      return elemento.ganaPapel(this);
    }
    
    ganaPiedra(elemento: Piedra): string {
      return "pierde";
    }
    
    ganaPapel(elemento: Papel): string {
      return "empate";
    }
    
    ganaTijera(elemento: Tijera): string {
      return "gana";
    }
  }