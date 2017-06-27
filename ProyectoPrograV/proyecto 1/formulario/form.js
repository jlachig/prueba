var ingreso = document.getElementsByClassName('ingreso');

for (var i=0; i< ingreso.length; i++){
    
ingreso[i].addEventListener('keyup', function(){
    
    if(this.value.length>=1){
        
        this.nextElementSibling.classList.add('fijar');
    }
    else{
      this.nextElementSibling.classList.remove('fijar');
        
    }
    
});
}