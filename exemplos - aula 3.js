// 1. Crie uma função que receba dois
// números n1 e n2 e devolva a soma deles.
function somar(n1, n2) {
	return n1 + n2;
}

console.log(somar(4, 6));
console.log(somar(2, 5));

// 2. Crie uma função que receba três
// números n1, n2 e n3 e devolva a soma deles.
function somar3(n1, n2, n3) {
	return n1 + n2 + n3;
}

console.log(somar3(4, 6, 8));
console.log(somar3(2, 5, 9));

// 3. Crie uma função que receba três
// números a, b e c e devolva o resultado de a³ + b² + c.
function ex3(a, b, c) {
	return a ** 3 + b ** 2 + c;
}

console.log(ex3(4, 6, 8));
console.log(ex3(2, 5, 9));

// 4. Crie uma função que receba quatro números
// n1, n2, n3 e n4 e calcule a média deles.
function media4(n1, n2, n3, n4) {
	return (n1 + n2 + n3 + n4) / 4;
}

console.log(media4(5, 6, 7, 8));
console.log(media4(10, 12, 20, 22));

// 5. Crie uma função que receba três números
// n1, n2 e n3 e calcule a média deles.
function media3(n1, n2, n3) {
	return (n1 + n2 + n3) / 3;
}

console.log(media3(5, 6, 7));
console.log(media3(10, 12, 20));

// 6. Crie uma função que receba cinco números
// e calcule a média deles.
function media5(n1, n2, n3, n4, n5) {
	return (n1 + n2 + n3 + n4 + n5) / 5;
}

console.log(media5(5, 6, 7, 8, 9));
console.log(media5(10, 12, 20, 22, 13));

// 7. Complemente os exercícios anteriores criando
// para cada um, as instruções que peçam ao usuário
// informar os dados necessários e também exibindo o
// resultado, transformando-os em programas completos.

// a - Exercício 1.
function ex7a() {
	let n1 = prompt("Digite o valor n1.") * 1;
	let n2 = prompt("Digite o valor n2.") * 1;
	let resultado = somar(n1, n2);
	console.log("O resultado é " + resultado);
}

function ex7b() {
	let n1 = prompt("Digite o valor n1.") * 1;
	let n2 = prompt("Digite o valor n2.") * 1;
	let n3 = prompt("Digite o valor n3.") * 1;
	let resultado = somar3(n1, n2, n3);
	console.log("O resultado é " + resultado);
}

function ex7c() {
	let a = prompt("Digite o valor a.") * 1;
	let b = prompt("Digite o valor b.") * 1;
	let c = prompt("Digite o valor c.") * 1;
	let resultado = ex3(a, b, c);
	console.log("O resultado é " + resultado);
}

function ex7d() {
	let n1 = prompt("Digite o valor n1.") * 1;
	let n2 = prompt("Digite o valor n2.") * 1;
	let n3 = prompt("Digite o valor n3.") * 1;
	let n4 = prompt("Digite o valor n4.") * 1;
	let resultado = media4(n1, n2, n3, n4);
	console.log("O resultado é " + resultado);
}

function ex7e() {
	let n1 = prompt("Digite o valor n1.") * 1;
	let n2 = prompt("Digite o valor n2.") * 1;
	let n3 = prompt("Digite o valor n3.") * 1;
	let resultado = media3(n1, n2, n3);
	console.log("O resultado é " + resultado);
}

function ex7f() {
	let n1 = prompt("Digite o valor n1.") * 1;
	let n2 = prompt("Digite o valor n2.") * 1;
	let n3 = prompt("Digite o valor n3.") * 1;
	let n4 = prompt("Digite o valor n4.") * 1;
	let n5 = prompt("Digite o valor n5.") * 1;
	let resultado = media5(n1, n2, n3, n4, n5);
	console.log("O resultado é " + resultado);
}

// ex7d();

// 8. Leia do usuário o nome, o telefone e a idade
// e mostre uma mensagem semelhante à essa:
// Fulano da Silva, parabéns pelos seus 18 anos.
// Ligue agora para (11) 98765-4321.
function ex8() {
	let nome = prompt("Digite o seu nome.");
	let telefone = prompt("Digite o seu telefone.");
	let idade = prompt("Digite a sua idade.") * 1;
	console.log(nome + ", parabéns pelos seus " + idade + " anos. Ligue agora para " + telefone);
}

// 13. Crie um programa completo que receba o nome
// e o horário e mostre uma mensagem como a que se segue:
// Fulano da Silva, já são 22:10, então SEXTOU! 
function ex13() {
	const nome = prompt("Digite o seu nome.");
	const horario = prompt("Digite o horário.");
	console.log(nome + ", já são " + horario + ", então SEXTOU");
}