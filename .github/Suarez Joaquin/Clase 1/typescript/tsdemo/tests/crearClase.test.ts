import assert from "assert";
import { string } from "yargs";
import { Foto } from "../src/Foto";
import { Carpeta } from "../src/Carpeta";
import { Archivo } from "../src/Archivo";


  test('Inicializar cualquier tipo de clase', () => {
    let planet = new Foto("foto familia",100);
    expect(("foto familia")).toBe(planet.getNombre());
    }
  );



    test('La clase tiene que tener un tamaño el cual es la cantidad de letras del nombre', () => {
      let planet = new Foto("foto familia",100);
      expect((12)).toBe(planet.getTamaño());
      }
    );

    test('Las uma de todos los tamaños', () => {
      let planet = new Foto("foto familia",100);
      let carpetaContend = new Carpeta("capeta");
      let archivoAlgo = new Archivo("hola");
      carpetaContend.agregarElementoAcarpeta(planet)
      carpetaContend.agregarElementoAcarpeta(archivoAlgo)
      expect((12)).toBe(planet.getTamaño());
      expect((22)).toBe(carpetaContend.tamanioTotalDeTodosLosElementos());

      }
    );


