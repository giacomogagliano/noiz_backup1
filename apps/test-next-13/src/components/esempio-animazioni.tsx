<img src="/foto/computer.jpg" alt="Immagini di esempio" class="fadeintext"></img>


.fadeintext {
    visibility: hidden;
  }
  .fadeintext.fadein {
    visibility: visible !important;
    -webkit-animation: fade_in_anim 1.2s;
    animation: fade_in_anim 1.2s;
  }
  @-moz-keyframes fade_in_anim {
    0%{opacity:0}
    100%{opacity:1}
  }
  @-webkit-keyframes fade_in_anim {
    0%{opacity:0}
    100%{opacity:1}
  }
  @keyframes fade_in_anim {
    0%{opacity:0}
    100%{opacity:1}
  }


  /*
Definsco la funzione che applica alle immagini la classe 'fadein'
quando l'utente gli si avvicina mediante lo scrolling della pagina
*/
function textFadeIn(el) {

    // calcolo l'altezza della finestra
    var wh = $(window).height();
  
    // ciclo tutte le immagini identificate mediante il selettore
    // passato in argomento alla funzione textFadeIn()
    $(el).each(function(){
  
      // calcolo la posizione, lungo l'asse verticale, dell'immagine
      var thisPos = $(this).offset().top;
  
      // calcolo la posizione attuale dello scroll
      var topOfWindow = $(window).scrollTop();
  
      // faccio una serie di calcoli per capire quando l'utente si avvicina all'immagine
      if (topOfWindow + wh - 200 > thisPos ) {
  
        // appena l'immagine entra nello schermo applico la classe 'fadein'
        // (...e tutto quello che succederà è definito mediante CSS)
        $(this).addClass('fadein');
  
      }
    });
  }
  
  /*
  Lancio la funzione al verificarsi di alcuni eventi (scrolling e resize)
  legati alla finestra del browser
  */
  $(window).on('scroll resize', function() {
  
    // applico l'effetto alle sole immagini con classe 'fadeintext'
    textFadeIn('.fadeintext');
  
  });



