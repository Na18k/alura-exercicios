console.log(`\n Trabalhando com Loops`);

const listaDeDestinos = new Array(
	`Salvador`,
	`São Paulo`,
	`Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos Possiveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;


console.log('Embarque: \n\n');
if(idadeComprador >= 18 && temPassagemComprada) {
	console.log("Boa Viagem");
} else {
	console.log("Você não pode embarcar!")
}



console.log(listaDeDestinos);