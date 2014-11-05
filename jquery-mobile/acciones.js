// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
		$('#izquierda').swipeleft(function(){
			navigator.notification.alert("Deslizó a la Izquierda",function(){"Practica4","Aceptar"});
		});//barrer izquierda
		
		$('#derecha').swiperight(function(){
			navigator.notification.confirm("¿Que quieres hacer?",function(opt){
				switch(opt)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(1000);
					break;
				}//switch opt
			},"Examen2","Beep,Vibrar,Cancelar");//confirm
		});//barrer derecha
	},false);//ready device
});//document

