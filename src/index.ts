import validator from 'validator';

let name: string = 'Wellington';
let sobrenome = 'Souza';

if (validator.isLowercase(name)) {
    console.log(`A string ${name} é toda minúscula.`);
} else {
    console.log(`A string ${name} não é toda minúscula.`);
}

console.log(`O nome completo é ${name} ${sobrenome}.`)