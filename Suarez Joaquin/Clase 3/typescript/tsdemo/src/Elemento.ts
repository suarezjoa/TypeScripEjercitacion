import { v4 as uuidv4 } from 'uuid';
import { Piedra } from "./Piedra";
import { Tijera } from "./Tijera";
import { Papel } from "./Papel";

export abstract class Elemento {
    abstract gana(elemento: Elemento): string;
    ganaPiedra(elemento: Piedra): string {
        return "empate";
    }
    ganaPapel(elemento: Papel): string {
        return "empate";
    }
    ganaTijera(elemento: Tijera): string {
        return "empate";
    }
  }