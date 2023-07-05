var setadireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("Leonardo")
var samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("Bruna")

function RolarParaDireita() {
    var Bruna = document.getElementById("Bruna");
    Bruna.style.display = "block";
    var Leonardo = document.getElementById("Leonardo");
  Leonardo.style.display = "none";
  var setadireita = document.getElementById("seta-direita");
  setadireita.style.display = "none";
  var setaEsquerda = document.getElementById("seta-esquerda");
  setaEsquerda.style.display = "flex";
  }

function RolarParaEsquerda() {
    var Bruna = document.getElementById("Bruna");
    Bruna.style.display = "none";
    var Leonardo = document.getElementById("Leonardo");
  Leonardo.style.display = "flex";
  var setadireita = document.getElementById("seta-direita");
  setadireita.style.display = "flex";
  var setaEsquerda = document.getElementById("seta-esquerda");
  setaEsquerda.style.display = "none";
  } 