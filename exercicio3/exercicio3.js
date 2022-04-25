/* 

Crie um objeto para colocar nome e duas notas. Atribua nome e duas notas para o primeiro objeto, que será nosso primeiro aluno. Agora crie mais um objeto para colocar informações do nosso segundo aluno. Mostre as informações de cada aluno no console. Mostre também a média do primeiro aluno e a média do segundo aluno. Por fim mostre a média desta turma de 2 alunos. 

*/


let aluno1 = {
    nome: 'Leticia',
    nota1: 10,
    nota2: 8
}

let aluno2 = {
    nome: 'Éder',
    nota1: 9,
    nota2: 8
}

for (const atributo in aluno1) {
    console.log(`${atributo} = ${aluno1[atributo]}`);
}

for (const atributo in aluno2) {
    console.log(`${atributo} = ${aluno2[atributo]}`);
}

let mediaAluno1 = (aluno1.nota1 + aluno1.nota2) / 2;
let mediaAluno2 = (aluno2.nota1 + aluno2.nota2) / 2;

console.log(`a média do aluno ${aluno1.nome} foi ${mediaAluno1}`);
console.log(`a média do aluno ${aluno2.nome} foi ${mediaAluno2}`);

let mediaTurma = (mediaAluno1 + mediaAluno2) / 2;

console.log(`A média da turma é ${mediaTurma.toFixed(2)}`);
