const questoes = [
  {
    "id": 2,
    "question": "A distância de segurança, se o condutor que transita à minha frente diminuir a velocidade:",
    "options": [
      "Aumenta.",
      "Diminui.",
      "Não se altera."
    ],
    "answer": 1
  },
  {
    "id": 3,
    "question": "O condutor determina qual é a resposta motora a executar, em que processo da tarefa da condução?",
    "options": [
      "Decisão.",
      "Antecipação.",
      "Previsão.",
      "Recolha."
    ],
    "answer": 0
  },
  {
    "id": 4,
    "question": "O vento afecta a estabilidade do veículo:",
    "options": [
      "Particularmente quando é muito forte em túneis.",
      "Particularmente em veículos de caixa aberta.",
      "Particularmente quando é muito forte e sopra lateralmente.",
      "Não."
    ],
    "answer": 2
  },
  {
    "id": 5,
    "question": "Que veículos consideram-se prioritários?",
    "options": [
      "As ambulâncias que transportam feridos.",
      "As comitivas governamentais.",
      "Os que transitam em missão urgente de socorro e comitivas governamentais, assinalando adequadamente a sua marcha."
    ],
    "answer": 2
  },
  {
    "id": 7,
    "question": "Parar ou estacionar, é proibido:",
    "options": [
      "A menos de 3 m das passagens assinaladas para a travessia de peões e velocípedes.",
      "A menos de 10 m das passagens assinaladas para a travessia de peões e velocípedes.",
      "A menos de 15 m das passagens assinaladas para a travessia de peões e velocípedes.",
      "A menos de 5 m das passagens assinaladas para a travessia de peões e velocípedes."
    ],
    "answer": 3
  },
  {
    "id": 9,
    "question": "A distância percorrida desde que o condutor identifica um perigo até que o veículo pare completamente...",
    "options": [
      "Depende apenas do estado dos travões.",
      "Depende apenas do estado do condutor.",
      "É maior quanto maior for a velocidade.",
      "Só varia se o veículo ou a via estão em mau estado."
    ],
    "answer": 2
  },
  {
    "id": 10,
    "question": "O uso do cinto de segurança nos assentos traseiros...",
    "options": [
      "Só são obrigatórios fora das localidades.",
      "São da exclusiva responsabilidade dos ocupantes, já que num acidente seriam os únicos afectados.",
      "Não é obrigatório, mas é aconselhável.",
      "Podem salvar a vida aos seus ocupantes e impedem que eles causem lesões graves aos outros passageiros."
    ],
    "answer": 3
  },
  {
    "id": 12,
    "question": "Nas estradas nacionais, a suspensão do trânsito deve ser solicitada:",
    "options": [
      "À ANE e, nas estradas locais, aos conselhos municipais.",
      "Ao INATTER e, nas estradas locais, aos conselhos municipais.",
      "À polícia de segurança pública e, nas estradas locais, aos conselhos municipais.",
      "Ao Ministério dos transportes e, nas estradas locais, aos conselhos municipais."
    ],
    "answer": 0
  },
  {
    "id": 15,
    "question": "Que veículos podem conduzir as pessoas que só possuam a carta de condução da categoria B?",
    "options": [
      "Todos.",
      "Automóveis ligeiros.",
      "Automóveis pesados de mercadorias ou de passageiros.",
      "Motociclos com ou sem carro."
    ],
    "answer": 1
  },
  {
    "id": 16,
    "question": "A distância de segurança entre veículos em marcha depende:",
    "options": [
      "Apenas da pressa do condutor.",
      "De que circulem em autoestrada, podendo ser mais pequena neste caso.",
      "Sempre da velocidade.",
      "Da capacidade de travagem do veículo."
    ],
    "answer": 2
  },
  {
    "id": 17,
    "question": "A definição de cruzamento é:",
    "options": [
      "Zona de intersecção de vias privadas ao mesmo nível.",
      "Zona de intersecção de vias privadas ao nível superior.",
      "Zona de intersecção de vias públicas ao mesmo nível.",
      "Zona de intersecção de vias privadas ao nível inferior."
    ],
    "answer": 2
  },
  {
    "id": 18,
    "question": "Quem tem prioridade de passagem nesta intersecção?",
    "options": [
      "Os condutores que se apresentem pela esquerda.",
      "Todos os condutores que circulem pela via transversal.",
      "Os condutores que circulem pela via de maior largura.",
      "Os condutores que se apresentem pela direita."
    ],
    "answer": 3
  },
  {
    "id": 19,
    "question": "É perigoso utilizar o telefone móvel durante a condução?",
    "options": [
      "Não, já que não afecta a condução.",
      "Sim, porque reduz a atenção necessária para conduzir com segurança.",
      "Não, quando a conversa não durar muito tempo.",
      "Sim, mas só quando se utilizar um aparelho “mãos livres”."
    ],
    "answer": 1
  },
  {
    "id": 20,
    "question": "Um condutor que expressa o descontentamento através de gestos ou palavras agressivas:",
    "options": [
      "Manifesta agressividade e falta de civismo.",
      "Está apenas, e bem, a demonstrar o seu descontentamento com o comportamento dos outros.",
      "Está a contribuir para mais e melhor cidadania no trânsito.",
      "Está a exercer um direito que lhe assiste perante a ignorância dos outros condutores."
    ],
    "answer": 0
  },
  {
    "id": 24,
    "question": "Os condutores não podem exceder as seguintes velocidades instantâneas (em quilómetros/hora):",
    "options": [
      "Automóveis pesados de passageiros dentro das localidades 50, fora das localidades 100.",
      "Automóveis pesados de passageiros dentro das localidades 60, fora das localidades 100.",
      "Automóveis pesados de passageiros dentro das localidades 60, fora das localidades 120.",
      "Automóveis pesados de passageiros dentro das localidades 50, fora das localidades 120."
    ],
    "answer": 1
  },
  {
    "id": 25,
    "question": "A ingestão de drogas:",
    "options": [
      "Diminui as capacidades do condutor, alterando os reflexos e a coordenação de movimentos.",
      "Aumenta as capacidades do condutor, melhorando os reflexos e a coordenação de movimentos.",
      "Afecta as capacidades do condutor, melhorando os reflexos e a coordenação de movimentos.",
      "Em determinadas condições ajudam o condutor a estar mais atento."
    ],
    "answer": 0
  }
];

let indice = 0;
let pontuacao = 0;
let selecionada = null;
let respondida = false;

const pergunta = document.getElementById("pergunta");
const opcoes = document.getElementById("opcoes");
const numero = document.getElementById("numero");
const progresso = document.getElementById("progresso");
const pontuacaoEl = document.getElementById("pontuacao");
const resultado = document.getElementById("resultado");
const confirmar = document.getElementById("confirmar");
const proxima = document.getElementById("proxima");
const barraProgresso = document.getElementById("barra-progresso");
const quiz = document.getElementById("quiz");
const final = document.getElementById("final");
const resumo = document.getElementById("resumo");
const reiniciar = document.getElementById("reiniciar");

function carregarQuestao() {
  const q = questoes[indice];

  selecionada = null;
  respondida = false;

  numero.textContent = `Questão ${indice + 1}`;
  progresso.textContent = `${indice + 1}/${questoes.length}`;
  pontuacaoEl.textContent = `${pontuacao} pontos`;
  pergunta.textContent = q.question;
  resultado.textContent = "";
  resultado.className = "resultado";
  confirmar.disabled = false;
  proxima.hidden = true;

  opcoes.innerHTML = "";

  q.options.forEach((texto, i) => {
    const botao = document.createElement("button");
    botao.className = "opcao";
    botao.type = "button";
    botao.textContent = `${String.fromCharCode(65 + i)}. ${texto}`;
    botao.addEventListener("click", () => selecionar(i));
    opcoes.appendChild(botao);
  });

  barraProgresso.style.width = `${(indice / questoes.length) * 100}%`;
}

function selecionar(i) {
  if (respondida) return;

  selecionada = i;

  document.querySelectorAll(".opcao").forEach((botao, index) => {
    botao.classList.toggle("selecionada", index === i);
  });
}

function confirmarResposta() {
  if (selecionada === null || respondida) return;

  const q = questoes[indice];
  const botoes = document.querySelectorAll(".opcao");
  respondida = true;

  botoes.forEach((botao, i) => {
    botao.disabled = true;

    if (i === q.answer) {
      botao.classList.add("certa");
    }

    if (i === selecionada && selecionada !== q.answer) {
      botao.classList.add("errada");
    }
  });

  if (selecionada === q.answer) {
    pontuacao++;
    resultado.textContent = "Resposta correta.";
    resultado.className = "resultado certo";
  } else {
    resultado.textContent = `Resposta incorreta. A resposta correta é a alternativa ${String.fromCharCode(65 + q.answer)}.`;
    resultado.className = "resultado errado";
  }

  pontuacaoEl.textContent = `${pontuacao} pontos`;
  confirmar.disabled = true;
  proxima.hidden = false;
}

function proximaQuestao() {
  if (!respondida) return;

  indice++;

  if (indice >= questoes.length) {
    mostrarResultado();
    return;
  }

  carregarQuestao();
}

function mostrarResultado() {
  quiz.hidden = true;
  final.hidden = false;
  barraProgresso.style.width = "100%";

  const total = questoes.length;
  const percentagem = Math.round((pontuacao / total) * 100);

  resumo.textContent = `Acertaste ${pontuacao} de ${total} questões (${percentagem}%).`;
}

function reiniciarQuiz() {
  indice = 0;
  pontuacao = 0;
  quiz.hidden = false;
  final.hidden = true;
  carregarQuestao();
}

confirmar.addEventListener("click", confirmarResposta);
proxima.addEventListener("click", proximaQuestao);
reiniciar.addEventListener("click", reiniciarQuiz);

carregarQuestao();
