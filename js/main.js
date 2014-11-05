$(document).ready(main);
		function main(){
			var arrastrable = $(".numero");
			var dividendo = $("#idDividendo");
			var divisor = $("#idDivisor");

			arrastrable.draggable({
				start:function(event,ui){
					var self = $(this);
					dividendo.addClass("start");
					divisor.addClass("start");
				},
				stop:function(event,ui){
					var self = $(this);
					self.css("left",0);
					self.css("top",0);
					dividendo.removeClass("start");
					divisor.removeClass("start");
				}
			});
			
			dividendo.droppable({
		      	
		      drop: function( event, ui ) {
		        var numero = ui.draggable;
		        var num = parseInt(numero.text());
		        numero.remove();
		        var self = $(this);
		        self.append(num);

		      }
		      
		    });

			divisor.droppable({
		      	
		      drop: function( event, ui ) {
		        var numero = ui.draggable;
		        var num = parseInt(numero.text());
		        numero.remove();
		        var self = $(this);
		        self.append(num);

		      }
		      
		    });

			function calcularResultado(){
				var nDividendo = parseInt(dividendo.text());
				var nDivisor = parseInt(divisor.text());
				$("#idResultado").html(nDividendo/nDivisor);
			}
			$("#calcular").on("click",function(){
				calcularResultado();
			});
			$("#limpiar").on("click",function(){
				$("#contenedor").effect("shake");
				$("#idDivisor,#idDividendo,#idResultado").html("");
			});
		}//end main function