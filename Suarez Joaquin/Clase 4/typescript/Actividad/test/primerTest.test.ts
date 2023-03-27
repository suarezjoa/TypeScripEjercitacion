import { SHA256 } from 'crypto-js';
import { mock } from 'ts-mockito';
import { createHash } from 'crypto';
import { IBloque } from "../src/IBloque";
import * as util from 'util';
import * as crypto from 'crypto';


describe('Prueba unitaria para IBloque', () => {
    it('debe crear un objeto IBloque simulado con los valores correctos', async () => {
      const expectedHash = '0ce5d49a6c34a7369cdebba7df81bad47c3ca2842e7a8d92061e74e33193e55a';
  
      // crear objeto IBloque simulado
      const obj: IBloque = mock<IBloque>();
      obj.Index = 0;
      obj.HashAnterior = null;
      obj.nonce = "."
      obj.transacciones = "genesis";
      obj.Timestamp = new Date('2023-03-22 18:00:00.00');
      const data = obj.Index + obj.HashAnterior + obj.nonce + obj.transacciones + obj.Timestamp;
      obj.Hash = CryptoJS.SHA256(data).toString();

      obj.Hash = hash;
      // verificar si la propiedad Hash del objeto tiene el valor esperado
      expect(obj.Hash.toString()).toEqual(expectedHash);
    });
  });