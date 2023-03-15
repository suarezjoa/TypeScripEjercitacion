import assert from "assert";
import { string } from "yargs";
import { Carpeta } from "../src/Carpeta";
import { Foto } from "../src/Foto";


  test('Inicializar cualquier tipo de clase', () => {
    let carpetaPrueba0 = new Carpeta("fotos de la familia");
    let fotoPrueba0 = new Foto("foto familia",100);
    expect((12)).toBe(fotoPrueba0.ObtenerTamaño());
    expect(("fotos de la familia")).toBe(carpetaPrueba0.getNombre());
    }
  );
