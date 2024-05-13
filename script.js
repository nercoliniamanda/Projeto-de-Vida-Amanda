const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.abas-conteudo');

console.log(botoes);

for (let i = 0; i < botoes.length; i++) {

  botoes[i].onclick = function() {

    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  }
}

const contadores = document.querySelectorAll(".contador");

//datas de cada objetivo
//data no formato Ano-Mês-Dia-Hora-Minuto-Segundo
const dataObjetivo1 = new Date("2024-05-08" + " 00:21:00");
const dataObjetivo2 = new Date("2024-05-15" + " 08:48:00");
const dataObjetivo3 = new Date("2024-05-23" + " 10:53:00");
const dataObjetivo4 = new Date("2024-05-30" + " 14:12:00");

//lista contendo todas as datas
const tempos = [dataObjetivo1, dataObjetivo2, dataObjetivo3, dataObjetivo4];

//função para calcular o tempo restante
//data final do objetivo - a data atual(hoje)
function calculaTempo(dataObjetivo) {
  //variável que identifica a data do dia
  let dataAtual = new Date;

  //calcular a diferença entre a data atual e a data do objetivo
  let tempoFinal = dataObjetivo - dataAtual;

  //converter o tempo restante em dias, horas, minutos e segundos
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  //retornar as listas com as quantidades corretas
  if (tempoFinal > 0) {
    return [dias, horas, minutos, segundos];
  } else {
    return [0, 0, 0, 0];
  }
}

//função para atualizar os valores na tela
function atualizaCronometro() {
  for (let i = 0; i < contadores.length; i++) {
    //atualiza os elemetos do HTML com os valores calculados anteriormente
    document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
    document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
    document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
    document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
  }
}

//função para atualizar o cronômetro o tempo todo
function comecaCronometro() {
  atualizaCronometro();
  //definir um intervalo para atualizar
  setInterval(atualizaCronometro, 1000);
}

comecaCronometro();