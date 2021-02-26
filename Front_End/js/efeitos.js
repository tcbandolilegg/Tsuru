const armazenar = document.querySelector(".funcionalidades #armazenar");
const alarme = document.querySelector(".funcionalidades #alarme");
const doencas = document.querySelector(".funcionalidades #doencas");
const agenda = document.querySelector(".funcionalidades #agenda");
const pesquisa = document.querySelector(".funcionalidades #pesquisa");
const vacina = document.querySelector(".funcionalidades #vacina");
const alertas = document.querySelector(".funcionalidades #alertas");
const labs = document.querySelector(".funcionalidades #labs");


armazenar.addEventListener("mouseover", mostraArmazenar);
// como descobri em que divi pasou? 
armazenar.addEventListener("click", detalhesArmazenar);
armazenar.addEventListener("mouseout", mostraFiguraArmazenar);

function mostraArmazenar() {
  console.log("Descrição Armazenar")
}

function mostraFiguraArmazenar() {
  console.log("Figura Armazenar")
}

function detalhesArmazenar() {
  console.log("detalhesArmazenar")

}
