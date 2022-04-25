/* 

Crie cinco objetos JavaScript dentro de um Array contendo nome(texto), idade(número), skills (array), ou seja um total de cinco alunos. Agora crie uma função que receba estes cinco objetos e mais um parâmetro skill(string). Dependendo da skill enviada mostrar no console.log(), quais alunos têm a skill enviada por parâmetro, mostrar todo o objeto.
Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar chamar a função enviando (alunos, “JavaScript”), precisa mostrar o Pedro e qual mais se encaixa nessa skill. 

*/

let listaAlunos = [
  //indice [0]
  {
    nome: "Flávio",
    idade: 37,
    skills: ["JavaScript", "TypeScript", "React"],
  },

  //indice [1]
  {
    nome: "Rafael",
    idade: 18,
    skills: ["Python", "C#", "PHP"],
  },

  //indice [2]
  {
    nome: "Sabrina",
    idade: 23,
    skills: ["HTML", "CSS", "JavaScript"],
  },

  //indice [3]
  {
    nome: "Eduarda",
    idade: 27,
    skills: ["JavaScript", "VueJS", "Ruby"],
  },

  //indice [4]
  {
    nome: "Karin",
    idade: 33,
    skills: ["JavaScript", "Java", "C++", "Wordpress"],
  },
];

//criando a função
function verificaSkill(turma, tecnologia) {
  let alunosComSkill = turma.filter((aluno) => {
    return aluno.skills.find((skill) => skill === tecnologia);
  });

  return alunosComSkill;
}

let alunosEncontrados = verificaSkill(listaAlunos, "React");

console.log(alunosEncontrados);
