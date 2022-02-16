$(function () {
   // habilita los tooltips
   $('[data-toggle="tooltip"]').tooltip()
   // muestra una alerta al presionar el boton enviar correo
   $('#enviarCorreo').click(function(){
   alert("El correo fue enviado correctamente.")
   })
   // cambia de color los h4 al hacerles doble click
   $('h4').on('dblclick', function(){
   $(this).toggleClass('dbl');
   })
   // esconde el contenido de las cards
   $('.hh5').click(function(){
   $('.cards').toggle();
   })
   // smooth transition (copy paste desde oliviarroz)
   $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    });
  
  });