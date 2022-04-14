// @@@@@@@@@@@  Exe3 @@@@@@@@@@@@@
const reviews = [
  {id:1,foto:"Flores azuis",descr:"Muito perfumadas",img:src="/Public/Images/azuis.jpg",
    text:"São flores azuis da nossa casa em Imbituba, SC , sul do Brasil"},
  {id:2,foto:"Bananeiras da agrofloresta",descr:"Dando bananas",img:src="/Public/Images/bananeiras.jpg",
    text:"São bananeiras da nossa casa em Imbituba, SC , sul do Brasil"},
  {id:3,foto:"Bromelia",descr:"Tem uma bolcinha que se chupa e é doce",img:src="/Public/Images/chupchup.jpg",
    text:"São Bromélias da nossa casa em Imbituba, SC , sul do Brasil"},
  {id:4,foto:"Saúde",descr:"Um brinde em Imbituba",img:src="/Public/Images/copos.jpg",
    text:"Um brinde a Imbituba, SC / sul do Brasil"},
  {id:5,foto:"Flor da Elicônia",descr:"Linda flor vermelho com amarelo",img:src="/Public/Images/eliconia.jpg",
    text:"São flores da Elicônia, da nossa casa em Imbituba, SC , sul do Brasil"},
]

const foto = document.getElementById("my-img");
const titulo = document.getElementById("author");
const caract = document.getElementById("job");
const detalhes = document.getElementById("info");
let compr_vet = reviews.length-1;
let index = 0;
document.querySelector(".random-btn").addEventListener('click',function(){
  index = Math.floor(Math.random()*compr_vet);
  console.log("Random > index: "+index);
  atualiza_dados(index);  
})

document.querySelector(".prev-btn").addEventListener('click',function(){
  index -= 1;
  if (index < 0) {
    index = compr_vet;
  }
  console.log(index);
  atualiza_dados(index);
})

document.querySelector(".next-btn").addEventListener('click',function(){
  index += 1;
  if (index > compr_vet) {
    index = 0;
  }
  console.log(index);
  atualiza_dados(index);
})

function atualiza_dados(index) {
  foto.src = reviews[index].img;
  titulo.innerHTML = reviews[index].foto;
  caract.innerHTML = reviews[index].descr;
  detalhes.innerHTML = reviews[index].text;
}