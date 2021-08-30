console.log(`Trabalhando com condicionais`);

// console.log(idadeComprador > 18); "maior que"
// console.log(idadeComprador < 18); "menor que"
// console.log(idadeComprador <= 18); "menor ou igual a"
// console.log(idadeComprador >= 18); "maior ou igual a"
// console.log(idadeComprador == 18); "igual a"
// || "ou"
// && "e"
// \n pula linha

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log("Não é maior de idade. Não vender.")
// }


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(2, 1); //removendo item
} else {
    console.log("Não é maior de idade e não está acompanhado. Não pode comprar.")
}

console.log("Embarque: \n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!")
} else {
    console.log("Você não pode embarcar sem acompanhante")
}
console.log(listaDeDestinos);