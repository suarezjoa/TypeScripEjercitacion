import assert from "assert";
import { string } from "yargs";
import { v4 as uuidv4 } from 'uuid';
import { Carpeta } from "../src/Carpeta";
import { Foto } from "../src/Foto";
import { Elemento } from "../src/Elemento";



  test('UnaCarpetaDebePoderAlmanecenarUnElemento', () => {
    let carpetaPrueba0 = new Carpeta("fotos de la familia");
    let fotoPrueba0 = new Foto("foto familia",100);
    expect((12)).toBe(fotoPrueba0.getTamaño());
    carpetaPrueba0.agregarElementoAcarpeta(fotoPrueba0);
    expect((fotoPrueba0)).toBe(carpetaPrueba0.obtenerElementoPorid(fotoPrueba0.getId()));

    }
  );

