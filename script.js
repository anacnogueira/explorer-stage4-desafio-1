const firstNumber = Number(prompt("Digite o primeiro número:"));
const secondNumber = Number(prompt("Digite o segundo número:"));

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const mod = firstNumber % secondNumber;

alert(`
    Soma: ${sum}
    Subtração: ${sub}
    Multiplicação: ${multi}
    Divisão: ${div}
    Módulo: ${mod}`);

if (sum % 2 === 0) {
  alert("A soma dos dois números é par");
} else {
  alert("A soma dos dois números é ímpar");
}

if (firstNumber === secondNumber) {
  alert("Os números são iguais");
} else {
  alert("Os números são diferentes");
}
