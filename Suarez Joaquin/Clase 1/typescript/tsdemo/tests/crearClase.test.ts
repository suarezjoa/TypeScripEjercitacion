import assert from "assert";
import { string } from "yargs";
import { Foto } from "../src/Foto";


  test('Inicializar cualquier tipo de clase', () => {
    let planet = new Foto("foto familia",100);
    expect(("foto familia")).toBe(planet.getNombre());
    }
  );



    test('La clase tiene que tener un tamaño el cual es la cantidad de letras del nombre', () => {
      let planet = new Foto("foto familia",100);
      expect((12)).toBe(planet.ObtenerTamaño());
      }
    );

