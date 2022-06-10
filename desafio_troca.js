//desafio que consiste em trocar informações de váriaveis.

let a = 10, b = 96, c = a;

console.log("Aqui vemos as váriaveis como elas realmente foram feitas: ", a,b);

a = b;
b = c;

//Criando uma nova variavel, armazenando A em C, podemos fazer com que B pegue o valor dessa nova var, e nao de A, que agora é 96, fazendo assim que B fique com a mesma quantidade de C, que é 10
console.log("E aqui, veremos as váriaveis trocadas: ",a,b);