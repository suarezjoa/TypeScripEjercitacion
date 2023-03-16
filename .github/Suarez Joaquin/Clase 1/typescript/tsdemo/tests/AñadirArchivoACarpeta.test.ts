import assert from "assert";
import { string } from "yargs";
import { v4 as uuidv4 } from 'uuid';
import { Carpeta } from "../src/Carpeta";
import { Foto } from "../src/Foto";
import { Elemento } from "../src/Elemento";
import { expect } from '@jest/globals';
import { Archivo } from '../src/Archivo';


  test('UnaCarpetaDebePoderAlmanecenarUnElemento', () => {
    let carpetaPrueba0 = new Carpeta("fotos de la familia");
    let ArchivoPrueba0 = new Archivo("foto familia");
    expect((12)).toBe(ArchivoPrueba0.getTamaño());
    carpetaPrueba0.agregarElementoAcarpeta(ArchivoPrueba0);
    expect((ArchivoPrueba0)).toBe(carpetaPrueba0.obtenerElementoPorid(ArchivoPrueba0.getId()));

    }
  );

