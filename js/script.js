//const playerOneInputField=document.querySelector('#playerOneInputField')

//console.log(playerOneBtn)
//const error=document.querySelector('#error');
//const  playerOneDiv=document.querySelector('.playerOneDiv');
//const  playerTwoDiv=document.querySelector('.playerTwoDiv');
//const playerName=document.querySelector('#playerName');
let playerNum=[''];
const btn=document.querySelector('#playerOneBtn')
btn.addEventListener('click',function(){
    console.log('ami click')
})


/* 
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
            firstPlayerDiv.classList.add('display-none');
            secondPlayerDiv.classList.remove('display-none');

           }
           else{
            error.innerHTML =`This Game Support 1 To 10`;
           }
        }
    }

} */