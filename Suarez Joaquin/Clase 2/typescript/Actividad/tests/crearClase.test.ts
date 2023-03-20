import { Pisouno } from "../src/Pisouno";
import { PlantaBaja } from "../src/PlantaBaja";
import { Ascensor } from "../src/Ascensor";
import { PisoDos } from "../src/PisoDos";
import { PisoTres } from "../src/PisoTres";


    test('Ir de pb a pisoUno', () => {
      let plantabaja = new PlantaBaja("PlantaBaja");
      let pisouno = new Pisouno("PisoUno");
      let as1 = new Ascensor();

      as1.agregarPiso(plantabaja);
      as1.agregarPiso(pisouno);
      as1.irA(pisouno)
      expect(pisouno).toBe(as1.getPisoActual());
      }
    );

    test('La clase tiene que tener un tamaño el cual es la cantidad de letras del nombre', () => {
      let plantabaja = new PlantaBaja("PlantaBaja");
      let pisouno = new Pisouno("PisoUno");
      let pisodos = new PisoDos("PisoDos");
      let pisotres = new PisoTres("PisoTres");
      let as1 = new Ascensor();

      as1.agregarPiso(plantabaja);
      as1.agregarPiso(pisouno);
      as1.agregarPiso(pisodos);
      as1.agregarPiso(pisotres);
      as1.irA(pisouno)
      expect(as1.getHistorial()).toEqual(["PlantaBaja","PisoUno"])
      as1.irA(pisotres)
      expect(as1.getHistorial()).toEqual(["PlantaBaja","PisoUno","PisoDos","PisoTres"])
      as1.irA(plantabaja)
      expect(as1.getHistorial()).toEqual(["PlantaBaja","PisoUno","PisoDos","PisoTres","PisoDos","PisoUno","PlantaBaja"])
      }
    );

