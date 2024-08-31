 var istatus= document.querySelector( "h5")

 var btn = document.querySelector("#ADD")
 
 var check = 0 

 

 btn.addEventListener("click" , function(){
   if(check==0){
    istatus.innerHTML = " FREINDS" 
    istatus.style.color = " green"
    btn.innerHTML = " remove friends "
   
    check=1
   }else{
      istatus.innerHTML = " stranger"
      istatus.style.color = " red"
      btn.innerHTML = " add friends "

      check=0
   }
 })
 