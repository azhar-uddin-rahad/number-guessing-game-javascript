const btnOne= document.querySelector('#playerOneBtn');
let playerNum=[];
console.log(btnOne);

btnOne.addEventListener("click", function (){
    const playerInputField='playerOneInputField';
    const playerNumber= 2;
    const previousPlayerDiv='playerOneDiv';
    const nextPlayerDiv='playerTwoDiv';
    playerInputNum(playerInputField,playerNumber,previousPlayerDiv,nextPlayerDiv);
    console.log(playerNum);
})


function playerInputNum(inputFieldId,playerNumber,previousPlayerDiv,nextPlayerDiv){
    const playerInputId=document.getElementById(inputFieldId);
    console.log(playerInputId)
    const  firstPlayerDiv=document.getElementById(previousPlayerDiv);
    const  secondPlayerDiv=document.getElementById(nextPlayerDiv); 
    if(!playerInputId.value){
        error.innerHTML='Number Enter on Input Box'
    }
    else{
        if(isNaN(playerInputId.value)){
            error.innerHTML=`"${playerInputId.value}" This value Not Support Please Type Name`;
        }

        else{
           if(playerInputId.value >= 1 && playerInputId.value<=10){
            playerNum.push(playerInputId.value);
            error.innerHTML='';
            playerName.innerHTML= `player ${playerNumber}`;
            firstPlayerDiv.classList.add('d-none');
            secondPlayerDiv.classList.remove('d-none');

           }
           else{
            error.innerHTML =`This Game Support 1 To 10`;
           }
        }
    }

} 