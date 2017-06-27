(function(){
    
    var actualizar = function(){ 
    var fecha = new Date,
        hora = fecha.getHours(),
        ampm,
        minutos= fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diasemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        anio = fecha.getFullYear();
        
     var pHoras = document.getElementById('horas'),
         pAMPM = document.getElementById('ampm'),
         pMinutos = document.getElementById('minutos'),
         pSegundos = document.getElementById('segundos'),
         pDiasemana = document.getElementById('diasemana'),
         pDia = document.getElementById('dia'),
         pMes = document.getElementById('meses'),
         pAnio = document.getElementById('ano');                
    var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
    
    pDiasemana.textContent = semana[diasemana];
     
     pDia.textContent = dia;
    
      var mesi = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        
        pMes.textContent = mesi[mes];
        
    pAnio.textContent = anio;
        
        if (hora >= 12){
            
            hora = hora - 12 ;
            ampm = 'PM';
        }else{
            
            ampm = 'AM';
        }
     if(hora == 0) {
         hora = 12;
     }
     pHoras.textContent = hora;
     pAMPM.textContent = "["+ampm+"]";
        
 if(minutos <10){ minutos = "0" + minutos};
 if(segundos <10){segundos= "0" + segundos};
        
     pMinutos.textContent = minutos;
     pSegundos.textContent = segundos;
    };
         
   
    actualizar();
    var intervalo = setInterval(actualizar, 1000); 
}())