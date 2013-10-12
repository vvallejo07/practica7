//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

$(function(){
	document.addEventListener("deviceready", function(){
		//Acelerómetro
		var watchAC=null;
		$('#acelerometro .individual li').tap(function(){
			if($(this).index()==0){
				if(watchAC==null){
					watchAC=navigator.accelerometer.watchAcceleration(function(acc){
						$('#acelerometro h2').html('Aceleración<br/>'+'X: '+acc.x+'<br/>'+'Y: '+acc.y+'<br/>'+'Z: '+acc.z);
					},function(){
						alert('Error al iniciar');
					},{frecuency:500});
				}
			}else{
				if(watchAC != null){
					navigator.accelerometer.clearWatch(watchAC);
					watchAC = null;
					$('#acelerometro h2').html('Detenido');
				}
			}
		});
		//Brújula
		var watchBR=null;
		$('#brujula .individual li').tap(function(){
			if($(this).index()==0){
				if(watchBR==null){
					watch=navigator.compass.watchHeading(function(heading){
						$('#brujula h2').html('Brujula: '+heading.magneticHeading);
					},function(){
						alert('Error al iniciar');
					},{frecuency:500});
				}
			}else{
				if(watchBR != null){
					navigator.compass.clearWatch(watchBR);
					watchBR = null;
					$('#brujula h2').html('Detenido');
				}
			}
		});
	}, false);
});