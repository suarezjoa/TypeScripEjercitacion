import { Elemento } from "../src/Elemento";
import { Piedra } from "../src/Piedra";
import { Papel } from "../src/Papel";
import { Tijera } from "../src/Tijera";

  test('Tijera vs pierda', () => {
    let tijeraob = new Tijera();
    let piedraob = new Piedra();
    expect(("gana")).toBe(piedraob.gana(tijeraob));
    }
  );
  test('Piedra Vs tijera', () => {
    let tijeraob = new Tijera();
    let piedraob = new Piedra();
    expect(("pierde")).toBe(tijeraob.gana(piedraob));
    }
  );
  test('Piedra Vs Papel', () => {
    let papelob = new Papel();
    let piedraob = new Piedra();
    expect(("gana")).toBe(papelob.gana(piedraob));
    }
  );
  test('Papel Vs Piedra', () => {
    let papelob = new Papel();
    let piedraob = new Piedra();
    expect(("pierde")).toBe(piedraob.gana(papelob));
    }
  );
  test('Papel Vs Tijera', () => {
    let papelob = new Papel();
    let tijeraob = new Tijera();
    expect(("gana")).toBe(tijeraob.gana(papelob));
    }
  );
  test('Tijera Vs Papel', () => {
    let papelob = new Papel();
    let tijeraob = new Tijera();
    expect(("pierde")).toBe(papelob.gana(tijeraob));
    }
  );
  test('Tijera Vs Tijera', () => {
    let tijera2 = new Tijera();
    let tijeraob = new Tijera();
    expect(("empate")).toBe(tijeraob.gana(tijera2));
    }
  );
  test('Papel Vs Papel', () => {
    let papel1 = new Papel();
    let papel2 = new Papel();
    expect(("empate")).toBe(papel1.gana(papel2));
    }
  );
  test('Pierda Vs Pierda', () => {
    let Pierda1 = new Papel();
    let Pierda2 = new Papel();
    expect(("empate")).toBe(Pierda1.gana(Pierda2));
    }
  );



