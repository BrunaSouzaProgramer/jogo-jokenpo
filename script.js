let maoJogador = document.querySelectorAll(".mao-jogador")
let maoComputador = document.querySelectorAll(".mao-computador")
let escolhaJogador = document.querySelector(".escolha-jogador")
let escolhaComputador = document.querySelector(".escolha-computador")
let respostaVencedor = document.querySelector(".resposta-vencedor")
let placarJogador = document.querySelector("#placar-jogador")
let placarComputador = document.querySelector("#placar-computador")

let vitoriasJogador = 0
let vitoriasComputador = 0

maoJogador.forEach((mao, indexJogador) => {
   mao.addEventListener("click", (e) => {
      escolhaJogador.src = mao.src
      let numeroRandom = Math.floor(Math.random() * 3)
      escolhaComputador.src = maoComputador[numeroRandom].src
      maoComputador.forEach((mao, indexComputador) => {
         console.log(mao)
         if(indexComputador == numeroRandom){
            mao.style.backgroundColor = "red"
         } else {
            mao.style.backgroundColor = "beige"
         }
      })

      respostaVencedor.innerText = quemVenceu(indexJogador, numeroRandom)
      placarJogador.innerText = String(vitoriasJogador)
      placarComputador.innerText = String(vitoriasComputador)
   })
})

function quemVenceu(numeroJogador, numeroComputador){
   if(numeroJogador == numeroComputador){
      return "empate"
   } else if(numeroJogador == 0 && numeroComputador == 1){
      vitoriasComputador = vitoriasComputador + 1
      return "Computador venceu"
   } else if(numeroJogador == 0 && numeroComputador == 2){
      vitoriasJogador = vitoriasJogador + 1
      return "Jogador venceu"
   } else if(numeroJogador == 1 && numeroComputador == 0){
      vitoriasJogador = vitoriasJogador + 1
      return "Jogador venceu"
   } else if(numeroJogador == 1 && numeroComputador == 2){
      vitoriasComputador = vitoriasComputador + 1
      return "Computador venceu"
   } else if(numeroJogador == 2 && numeroComputador == 0){
      vitoriasComputador = vitoriasComputador + 1
      return "Computador venceu"
   } else if(numeroJogador == 2 && numeroComputador == 1){
      vitoriasJogador = vitoriasJogador + 1
      return "Jogador venceu"
   } else {
      return "Algo deu errado"
   }
}

