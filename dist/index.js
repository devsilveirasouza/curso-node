"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const Matematica_1 = __importDefault(require("./Matematica")); // IMPORTANDO TUDO
// import * as Funcoes from './funcoes';// IMPORTANDO TUDO
// import { somar, multiplicar } from './funcoes';// IMPORTANTO COISAS ESPECIFICAS
let n1 = 10;
let n2 = 2;
let ip = '197.198.0.50';
console.log(`SOMA:          ${Matematica_1.default.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO:     ${Matematica_1.default.subtrair(n1, n2)}`);
console.log(`MULTIPLICAÇÃO: ${Matematica_1.default.multiplicar(n1, n2)}`);
console.log(validator_1.default.isEmail('suporte@gmail.com'));
console.log(validator_1.default.isIP(ip));
