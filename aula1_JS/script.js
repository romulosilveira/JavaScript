// exe do intervalo
const nota1 = Number(prompt("digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));
const nota3 = Number(prompt("Digite a terceira nota: "));

const media = (nota1 + nota2 + nota3) / 3;

console.log(`A média dos números deu: ${media.toFixed(2)}`);

// Aula Pratica
// Atividade 3
const idade = Number(prompt("Digite sua idade: "));

let ano_nasc = 2024 - idade;

alert(`Você nasceu em ${ano_nasc}`);

//Atividade 4
const raio = Number(prompt("Digite o raio do círculo desejado: "));

let area_circulo = 3.14 * raio ** 2;

console.log(`A área do círculo desejado é igual a ${area_circulo}`);

// Atividade 5
const dolar = Number(prompt("Digite o valor para o cambio [Dólar]: "));

let euro = dolar * 0.85;

console.log(`O valor de ${dolar} dólares é ${euro} euros.`);

// Atividade 6
const preco = Number(prompt("Digite o valor do produto: "));

let preco_com_desconto = preco - preco * 0.1;

console.log(`A valor com desconto é de ${preco_com_desconto} reais`);

// Atividade 7
const metro = Number(prompt("Digite o valor em metros desejado: "));

let centimetros = metro * 100;

console.log(`A valor de ${metro} metros equivale a ${centimetros} centímetros`);

// DESAFIO PRATICO
const v_hora = Number(prompt("Digite o valor da sua hora trabalhada: "));
const hora_trab = Number(
  prompt("Digite a quantidade de horas trabalhadas no mês: ")
);

sal_bruto = v_hora * hora_trab;
ir = sal_bruto * 0.11;
inss = sal_bruto * 0.08;
sindicato = sal_bruto * 0.05;
liquido = sal_bruto - ir - inss - sindicato;

alert(`Seu salário bruto foi de ${sal_bruto} reais.\n
Seus descontos foram:\n
IR = ${ir} reais.\n
INSS = ${inss} reais.\n
Sindicato = ${sindicato} reais.\n\n
Valor Líquido a Receber = ${liquido} reais.`);
