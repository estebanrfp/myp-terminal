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
            $('#result').append('<p class="comando">'+valor+'</p>');

            caso = valor.split(' ');

            var action = caso[0];
            var value = caso[1];

            if (commands[action] === undefined) {
                
                $('#result').append('<p class="result">Comando "'+action+'" no identificado.<br />Para ver lista de comandos, escribe: help</p>');
            
            } else {
                
                if (action == "clear") {

                    $('#result, .info').empty();

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

        // var value = commands[action];
        // var func = new Function(x);
        // func();
        //$('#result').append('<p class="result">'+value+'</p>'); // Simulamos result
        
        } else {
            $('#result, .info').empty();
        }
    }

    function terminal(action) {
        
        if (commands[action]) {
            var x = commands[action];
            // if (x = "") {};

            // var func = new Function(x);
            // func();
            $('#result').append('<p class="result">'+x+'</p>');
        
        } else {
            
            $('#result, .info').empty();
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
