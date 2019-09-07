// animar imagens
// Rick ----------------------------------------


function trocarRick() {
  if(rick!=null){
    setInterval(animarRick, 2000);
  }
}


let idRick = 2;
let idMorty = 2;

function animarRick() {
  const rick = document.querySelector('#rick');
  rick.setAttribute('src',`img/rick${idRick}.png`);
  morty.setAttribute('src',`img/morty${idMorty}.png`);
  	
    idRick++;
    idMorty++;

    if(idRick > 8){
      idRick = 8;//       
    }

    if(idMorty > 8){
      idMorty = 8;
    }

    // visualizar button Dash
    if(idRick >= 8){
      btnDash.forEach((item) => {
          item.style.display = "block";
        })
    }
}

trocarRick();


$('#rick2')
  .mouseover(function() {
    rick.setAttribute('src',`img/rickToque1.png`);
  })


// Morty ----------------------------------------
// const morty = document.querySelector('#morty');

// function trocarMorty() {
  
//   setInterval(animarMorty, 5500);
  
// }


// let idMorty = 1;

// function animarMorty() {
//   morty.setAttribute('src',`img/morty${idMorty}.png`);
  
//   moverMorty();
//     //idMorty++;

//     // if(idMorty > 3){
//     //   idMorty = 1;

//     //}
// }
// trocarMorty();

// function moverMorty() {
//   let pos = 0;
//   let id = setInterval(frame, 15);
//   function frame() {
//     if (pos >= 30) {
//       clearInterval(id);
//     } else {
//       pos+=.2;
//       morty.style.right = pos + '%';
//     }
//   }
// }

// Button iniciar e finalizar visualizacao dashboard
const dashboard = document.querySelectorAll("#dash");
const btnDash = document.querySelectorAll(".btn-vis");

// iniciar pagina com dash oculto
function codeAddress() {
    dashboard.forEach((item) => {
      item.style.display = "none";
    })
    btnDash.forEach((item) => {
      item.style.display = "none";
    })
}
window.onload = codeAddress;



// visualizar dahsboard
function iniciarDash() {
  
  dashboard.forEach(ativarVis)
  function ativarVis(item){
    if (item.style.display === "none") {
      item.style.display = "block";
    } 
  }

  try{
    rick.setAttribute('id','rick2');
    const rick2 = document.querySelector('#rick2');
    rick2.setAttribute('src','img/rickIniciar.png');

    morty.setAttribute('id','morty2');
    const morty2 = document.querySelector('#morty2');
    morty2.setAttribute('src','img/mortyIniciar.png');

  }finally{
    rick2.setAttribute('src','img/rickIniciar.png');
    morty2.setAttribute('src','img/mortyIniciar.png');
  }
    
} 

// esconder dahsboard
function terminarDash() {
  dashboard.forEach(desativarVis)
  function desativarVis(item){
    if (item.style.display === "block") {
      item.style.display = "none";
    } 
  }
  rick2.setAttribute('src','img/rickFinal.png');
  morty2.setAttribute('src','img/mortyFinal.png');
} 

// Janela Modal quando sair da página
$("body[rel=modal]").mouseleave(function(ev){
        ev.preventDefault();
 
        var id = $(this).attr("href");
 
        var alturaTela = $(document).height();
        var larguraTela = $(window).width();
     
        //colocando o fundo preto
        $('#mascara').css({'width':larguraTela,'height':alturaTela});
        $('#mascara').fadeIn(1000); 
        $('#mascara').fadeTo("slow",0.8);
 
        var left = ($(window).width() /2) - ( $(id).width() / 2 );
        var top = ($(window).height() / 2) - ( $(id).height() / 2 );
     
        $(id).css({'top':top,'left':left});
        $(id).show();   
    });
 
    $("#mascara").click( function(){
        $(this).hide();
        $(".window").hide();
    });
 
    $('.fechar').mouseleave(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
    });
