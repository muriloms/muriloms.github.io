// animacao imagem
const img = document.querySelector('#imgMu');

function myFunction() {
  setInterval(animarImagem, 150);
}


let idImg = 1;

function animarImagem() {
  img.setAttribute('src',`img/mu${idImg}.jpg`);
  	
  	idImg++;

  	if(idImg > 7){
  		idImg = 7;
  	}
}
myFunction();