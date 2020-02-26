var allInput = document.querySelectorAll('input[class="input--style-4 input-js"]');
var inscriptionButton = document.getElementById("btn-form");
var mySet;

function formControl() {
 
   var flag = true;
   for(let i = 0; i < allInput.length ; i++) {
       if(allInput[i].value.length == 0){
           flag = false;
           
       }
       
   }
   
   if(flag){
    swal.fire("Bravo !", "Vous allez être redirigé !", "success")
    mySet = setTimeout(function(){ 
        location.href = "http://127.0.0.1:5501/Profile-creation.html";
    }, 3000);
   }
   
   else{
    swal.fire("Erreur !", "Vous n'avez pas rempli le formulaire correctement, réessayez !", "error");
   }

}





inscriptionButton.addEventListener("click", formControl);

