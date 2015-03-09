$(document).ready(function() {
    
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
                
                if (action == "clear") {

                    $('#answer, .info').empty();

                }else if (action == "alert") {
                    
                    action_fnc(action, value);
                   
                
                }else{
                    
                    terminal(action);
                
                };

            }

        }
    });

    function action_fnc(action, value) {
        
        if (commands[action]) {

            if(value != undefined && value != ''){
                  alert(value);
            }

        var value = commands[action];
        var func = new Function(x);
        func();
        $('#answer').append('<p class="answer">'+value+'</p>'); // Simulamos answer

        
        } else {
            $('#answer, .info').empty();
        }
    }

    function terminal(action) {
        
        if (commands[action]) {
            var x = commands[action];
            // if (x = "") {};

            // var func = new Function(x);
            // func();
            $('#answer').append('<p class="answer">'+x+'</p>');
            $('#datos').append('<p>Mi nombre es Esteban Fuster Pozzi..<span>&nbsp;</span></p>');
        
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

});
