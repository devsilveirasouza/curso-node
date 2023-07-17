import validator from 'validator';
import Funcoes from './Matematica';// IMPORTANDO TUDO
// import * as Funcoes from './funcoes';// IMPORTANDO TUDO
// import { somar, multiplicar } from './funcoes';// IMPORTANTO COISAS ESPECIFICAS

let n1: number = 10;
let n2: number = 2;
let ip = '197.198.0.50';

console.log(`SOMA:          ${Funcoes.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO:     ${Funcoes.subtrair(n1, n2)}`);
console.log(`MULTIPLICAÇÃO: ${Funcoes.multiplicar(n1, n2)}`);

console.log( validator.isEmail('suporte@gmail.com') );
console.log( validator.isIP(ip) );
