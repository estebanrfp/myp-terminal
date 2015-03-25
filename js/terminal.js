$(document).ready(function() {

    maquina("datos",'Para obtener el listado de opciones, escribe [help] en el terminal',30);
    
    function focus() {         
        $('#user').focus(); 
    }
    
    $('.terminal').show(); focus();
    
    $(window).focus(function() {
        focus();
        $('#user').val($('#user').val());
    });
    
    $(document).click(function(e) {
        focus();
        $('#user').val($('#user').val());
    });
    
    $('#user').on('input',function(e){
        $('.clone').text($(this).val());
    });

    $('#user').keypress(function(e) {

        if(e.keyCode===13){
            
            e.preventDefault();
            var valor = $(this).val();
            $(this).val('');
            $('.clone').text('');
            $('#answer').append('<p class="command">'+valor+'</p>');

            caso = valor.split(' ');

            var action = caso[0];
            var value = caso[1];

            if (commands[action] === undefined) {
                
                $('#answer').append('<p class="answer">Command "'+action+'" no identificado.<br />Para ver lista de comandos, escribe: help</p>');
            
            } else {

                $('#datos').empty();
                
                if (action == "clear") {

                    $('#answer, .info').empty();
                
                }else{
                    
                    terminal(action);
                
                };
            }
        }
    });

    function terminal(action) {
		
		if (action == 'i') {              
					$('.monitor-info').slideToggle(500);
					$('.monitor-home').css({ "display":" none"});
					$('.monitor-estudios').css({ "display":" none"});
					$('.monitor-habilidades').css({ "display":" none"});
					$('.monitor-trabajos').css({ "display":" none"});
					$('.monitor-proyectos').css({ "display":" none"});
					$('.monitor-contacto').css({ "display":" none"});
					$('.images1').fadeOut(500);
            }
		if (action == 'es') {              
					$('.monitor-info').css({ "display":" none"});
					$('.monitor-home').css({ "display":" none"});
					$('.monitor-habilidades').css({ "display":" none"});
					$('.monitor-trabajos').css({ "display":" none"});
					$('.monitor-proyectos').css({ "display":" none"});
					$('.monitor-contacto').css({ "display":" none"});
					$('.monitor-estudios').slideToggle(500);
					$('.images1').fadeOut(500);					
            }
		if (action == 'hab') {  
					$('.monitor-estudios').css({ "display":" none"});
					$('.monitor-info').css({ "display":" none"});
					$('.monitor-trabajos').css({ "display":" none"});
					$('.monitor-proyectos').css({ "display":" none"});
					$('.monitor-contacto').css({ "display":" none"});
					$('.monitor-estudios').css({ "display":" none"});
					$('.monitor-home').css({ "display":" none"});
					$('h1').css({ "display":"inline-block"});
					$('.monitor-habilidades').slideToggle(500);
					$('.titulo').addClass("titulo-p");
					$('h3').fadeIn(1000);
					$('.images1').fadeOut(500);					
            }
		if (action == 'tr') {              
					$('.monitor-habilidades').css({ "display":" none"});
					$('.monitor-estudios').css({ "display":" none"});
					$('.monitor-habilidades').css({ "display":" none"});
					$('.monitor-info').css({ "display":" none"});
					$('.monitor-proyectos').css({ "display":" none"});
					$('.monitor-contacto').css({ "display":" none"});
					$('.monitor-home').css({ "display":" none"});
					$('.monitor-trabajos').slideToggle(500);
					$('.images1').fadeOut(500);					
            }
		if (action == 'py') {              
					$('.monitor-trabajos').css({ "display":" none"});
					$('.monitor-estudios').css({ "display":" none"});
					$('.monitor-habilidades').css({ "display":" none"});
					$('.monitor-trabajos').css({ "display":" none"});
					$('.monitor-info').css({ "display":" none"});
					$('.monitor-contacto').css({ "display":" none"});
					$('.monitor-home').css({ "display":" none"});
					$('.monitor-proyectos').slideToggle(500);
					$('.images1').fadeOut(500);					
            }
		if (action == 'cnt') {              
					$('.monitor-proyectos').css({ "display":" none"});
					$('.monitor-estudios').css({ "display":" none"});
					$('.monitor-habilidades').css({ "display":" none"});
					$('.monitor-trabajos').css({ "display":" none"});
					$('.monitor-proyectos').css({ "display":" none"});
					$('.monitor-info').css({ "display":" none"});
					$('.monitor-home').css({ "display":" none"});
					$('.monitor-contacto').slideToggle(500);
					$('.images1').fadeOut(500);
					
            }
        
        if (commands[action]) {

            var x = commands[action];

            if (action == 'help') {
                
                $('#answer').append('<p class="answer">'+x+'</p>');
               
                maquina("datos",'Para obtener mis datos, escriba alguna de las opciones listadas...',30);
				
				$('.monitor-home').show(1000);
				$('.monitor-info').css({ "display":" none"});
				$('.monitor-proyectos').css({ "display":" none"});
				$('.monitor-estudios').css({ "display":" none"});
				$('.monitor-habilidades').css({ "display":" none"});
				$('.monitor-trabajos').css({ "display":" none"});
				$('.monitor-proyectos').css({ "display":" none"});					
				$('.monitor-contacto').css({ "display":" none"});     
				$('.images1').fadeOut(500);
            
            }else{

                maquina("datos",x,30);

            }
        
        } else {
            
            $('#answer, .info').empty();
        }

    }

    $('.blink').each(function() {

        var elem = $(this);

        setInterval(function() {
        
            if (elem.css('visibility') == 'hidden') {
           
              elem.css('visibility', 'visible');
         
            } else {
          
              elem.css('visibility', 'hidden');
         
            }
        
        }, 500);
    });

    function maquina(contenedor, texto, intervalo){

        function randomIntFromInterval(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
        }

        longitud = texto.length;

        cnt = document.getElementById(contenedor);
        var i=0;

        var timer = setInterval(function(){

        cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "|";

        if(i >= longitud){

            clearInterval(timer);
            cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
            return true;
            
        } else {

            i++;

        }},intervalo);

    };

});

function desplegarHab1() {   
	    $('.ul-1').slideToggle(0);
	    $('h3').slideToggle(0);
	    $('.habilidades1').slideToggle(0);
			
};
function desplegarHab2() {   
	    $('.ul-2').slideToggle(0);
	    $('h3').slideToggle(0);
	    $('.habilidades2').slideToggle(0);
			
};
function desplegarHab3() {   
	    $('.ul-3').slideToggle(0);
	    $('h3').slideToggle(0);
	    $('.habilidades3').slideToggle(0);
			
};
function desplegarHab4() {   
	    $('.ul-4').slideToggle(0);
	    $('h3').slideToggle(0);
	    $('.habilidades4').slideToggle(0);
			
};
function desplegarHab5() {   
	    $('.ul-5').slideToggle(0);
	    $('h3').slideToggle(0);
	    $('.habilidades5').slideToggle(0);
			
};

$('.habilidades1').click ( desplegarHab1 )
$('.habilidades2').click ( desplegarHab2 )
$('.habilidades3').click ( desplegarHab3 )
$('.habilidades4').click ( desplegarHab4 )
$('.habilidades5').click ( desplegarHab5 )


	
