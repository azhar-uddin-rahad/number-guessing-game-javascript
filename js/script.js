const playerOneInputField=document.querySelector('#playerOneInputField')
const playerOneBtn=document.querySelector('#playerOneBtn');
const error=document.querySelector('#error');

playerOneBtn.addEventListener('click',function(){
    if(!playerOneInputField.value){
        error.innerHTML='Number Enter on Input Box'
    }
    else{
        if(isNaN(playerOneInputField.value)){
            error.innerHTML=`"${playerOneInputField.value}" This value Not Support Please Type Name`;
        }

        else{
           if(playerOneInputField.value >=1 && playerOneInputField.value<=10){

           }
           else{
            error.innerHTML =`This Game Support 1 To 10`;
           }
        }
    }

})