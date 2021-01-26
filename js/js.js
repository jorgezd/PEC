//Juego

$(document).ready (function() {

    $('#flechaDerecha').on('click', function() {
        
        var posicion1 = coche1.offsetLeft;

        if (posicion1 < 1000) {
            var nuevaPosicion1 = parseInt(posicion1) + 25;
            $("#coche1").animate({left:nuevaPosicion1},100);
        }

        $("#coche2").animate({left:1000},5850,"linear");        

    });

    var intervalo = setInterval(function() {
        if (parseInt(coche2.offsetLeft) === 1000 && parseInt(coche1.offsetLeft) < 1000) {
            alert("¡Perdiste!, Otra vez será...");
            clearInterval(intervalo);
        } else {
            if (parseInt(coche1.offsetLeft) === 1000 && parseInt(coche2.offsetLeft) < 1000) {
                alert("¡Has ganado!, Ahora eres el más veloz");
                clearInterval(intervalo);
            }
        }
    },100);

    $('#reset').on('click', function() {
        location.reload();
    });

    $('section div i').on('click', function() {

        if ($(this).css('color') === "rgb(0, 0, 0)") {
            $(this).css('color',"rgb(255, 0, 0)");
        } else {
            $(this).css('color',"rgb(0, 0, 0)");
        }

    });    

});