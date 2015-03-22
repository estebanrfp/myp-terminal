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
					$('.monitor-info').css({ "opacity": 1});
					$('.monitor-home').css({ "opacity": 0});
					$('.monitor-estudios').css({ "opacity": 0});
					$('.monitor-habilidades').css({ "opacity": 0});
					$('.monitor-trabajos').css({ "opacity": 0});
					$('.monitor-proyectos').css({ "opacity": 0});
					$('.monitor-contacto').css({ "opacity": 0});
            }
		if (action == 'es') {              
					$('.monitor-info').css({ "opacity": 0});
					$('.monitor-home').css({ "opacity": 0});
					$('.monitor-habilidades').css({ "opacity": 0});
					$('.monitor-trabajos').css({ "opacity": 0});
					$('.monitor-proyectos').css({ "opacity": 0});
					$('.monitor-contacto').css({ "opacity": 0});
					$('.monitor-estudios').css({ "opacity": 1});            
            }
		if (action == 'hab') {  
					$('.monitor-estudios').css({ "opacity": 0});
					$('.monitor-info').css({ "opacity": 0});
					$('.monitor-trabajos').css({ "opacity": 0});
					$('.monitor-proyectos').css({ "opacity": 0});
					$('.monitor-contacto').css({ "opacity": 0});
					$('.monitor-estudios').css({ "opacity": 0});
					$('.monitor-habilidades').css({ "opacity": 1});            
            }
		if (action == 'tr') {              
					$('.monitor-habilidades').css({ "opacity": 0});
					$('.monitor-estudios').css({ "opacity": 0});
					$('.monitor-habilidades').css({ "opacity": 0});
					$('.monitor-info').css({ "opacity": 0});
					$('.monitor-proyectos').css({ "opacity": 0});
					$('.monitor-contacto').css({ "opacity": 0});
					$('.monitor-trabajo').css({ "opacity": 1});            
            }
		if (action == 'py') {              
					$('.monitor-trabajos').css({ "opacity": 0});
					$('.monitor-estudios').css({ "opacity": 0});
					$('.monitor-habilidades').css({ "opacity": 0});
					$('.monitor-trabajos').css({ "opacity": 0});
					$('.monitor-info').css({ "opacity": 0});
					$('.monitor-contacto').css({ "opacity": 0});
					$('.monitor-proyectos').css({ "opacity": 1});            
            }
		if (action == 'cnt') {              
					$('.monitor-proyectos').css({ "opacity": 0});
					$('.monitor-estudios').css({ "opacity": 0});
					$('.monitor-habilidades').css({ "opacity": 0});
					$('.monitor-trabajos').css({ "opacity": 0});
					$('.monitor-proyectos').css({ "opacity": 0});
					$('.monitor-info').css({ "opacity": 0});
					$('.monitor-contacto').css({ "opacity": 1});            
            }
        
        if (commands[action]) {

            var x = commands[action];

            if (action == 'help') {
                
                $('#answer').append('<p class="answer">'+x+'</p>');
               
                maquina("datos",'Para obtener mis datos, escriba alguna de las opciones listadas...',30);
				
				$('.monitor-home').css({ "opacity": 1});
				$('.monitor-info').css({ "opacity": 0});
				$('.monitor-proyectos').css({ "opacity": 0});
				$('.monitor-estudios').css({ "opacity": 0});
				$('.monitor-habilidades').css({ "opacity": 0});
				$('.monitor-trabajos').css({ "opacity": 0});
				$('.monitor-proyectos').css({ "opacity": 0});					
				$('.monitor-contacto').css({ "opacity": 0});     
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
