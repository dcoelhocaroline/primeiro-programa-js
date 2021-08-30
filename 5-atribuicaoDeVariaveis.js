console.log("Atribuição de Variáveis");

//const idade = 29;
const primeiroNome = "Ricardo";
const sobrenome = "Bugan";

console.log(primeiroNome + sobrenome); //não adiciona espaço
console.log(primeiroNome, sobrenome);
console.log(primeiroNome + " " + sobrenome);

//crase indica texto
//${} indica caracteres especiais
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

//let para variáveis que podem variar e const para variáveis que não mudam

let contador = 0;
contador = contador +1;

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; //declaração de variável
idade = 26; // atribuição de valor
idade = idade + 1; //sobrescreve informação anterior
console.log(idade);