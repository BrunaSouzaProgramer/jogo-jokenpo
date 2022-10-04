let maoJogador = document.querySelectorAll(".mao-jogador")
let escolhaJogador = document.querySelector(".escolha-jogador")
let escolhaComputador = document.querySelector(".escolha-computador")
let maoComputador= document.querySelectorAll(".mao-computador")
let respostaVencedor= document.querySelector(".resposta-vencedor")
let placarJogador=document.querySelector("#placar-jogador")
let placarComputador=document.querySelector("#placar-computador")

let vitoriasJogador=0
let vitoriasComputador=0

maoJogador.forEach((mao, indicejogador) => {
   mao.addEventListener("click", (e) => {
      escolhaJogador.src=mao.src
      let numeroAleatorio=Math.floor(Math.random()*3)
      escolhaComputador.src=maoComputador[numeroAleatorio].src
      maoComputador.forEach((mao, indice) =>{
            if(indice==numeroAleatorio){
               mao.style.backgroundColor = "pink"
            }else{
               mao.style.backgroundColor = "beige"
            }
      })
      respostaVencedor.innerText=quemVenceu(indicejogador, numeroAleatorio)
      placarJogador.innerText=String(vitoriasJogador)
      placarComputador.innerText=String(vitoriasComputador)

   })
})



function quemVenceu(numerojogador, numerocomputador){
   if(numerojogador==numerocomputador){
      return "empate"

   }else if(numerojogador==0 && numerocomputador==1){
      vitoriasComputador=vitoriasComputador+1
      return "computador venceu"   
   }else if(numerojogador==0 && numerocomputador==2){
      vitoriasJogador=vitoriasJogador+1
      return "jogador venceu"
   }else if(numerojogador==1 && numerocomputador==0){
      vitoriasJogador=vitoriasJogador+1
      return "jogador venceu"
   }else if(numerojogador==1 && numerocomputador==2){
      vitoriasComputador+=1
      return "computador venceu"
   }else if(numerojogador==2 && numerocomputador==0){
      vitoriasComputador+=1
      return "computador venceu"
   }else if(numerojogador==2 && numerocomputador==1){
      vitoriasJogador+=1
      return "jogador venceu"
   }

 }


