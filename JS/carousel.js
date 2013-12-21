$(document).ready(function() {
	var puntos = $("ul.selectores li");
	var imagenes = $(".imagenes li");
	var ultimoitem = puntos.length-1;
	var x;

	puntos.first().addClass("seleccionado");
	imagenes.hide().first().show();

	function respuesta (x) {
		imagenes.fadeOut(600);
		imagenes.eq(x).fadeIn(600);
		puntos.removeClass("seleccionado");
		puntos.eq(x).addClass("seleccionado");
	}

	puntos.click(function(){
		if (!$(this).hasClass("seleccionado")) {
			x = $(this).index();
			respuesta(x);
		}
	});

	$(".prev").click(function() {
		x = $(".seleccionado").index();
		if( x === (ultimoitem - 4) ) {
			x = 4;
		}
		else {
			x = x - 1;
		}
		respuesta(x);
	});
	$(".next").click(function() {
		x = $(".seleccionado").index();
		if( x === ultimoitem ) {
			x = 0;
		}
		else {
			x = x + 1;
		}
		respuesta(x);
	});
});
