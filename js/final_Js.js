const btnOne = document.querySelector("#playerOneBtn");
const playerName=document.querySelector("#playerName");
const chance = document.querySelector(".playerChange");
const error=document.querySelector('#error');
const play1=document.querySelector('#playerEnterValue');
const parPlayerInputValue=document.querySelector('.parPlayerInputValue')


let playerNum=[""];

btnOne.addEventListener('click',function(){
    playerInputNum("playerOneInputField",1,"playerOneDiv","playerTwoDiv",true);
})

const btnTwo = document.querySelector("#playerTwoBtn");
//this arr pass for click count
let arr2=[1,2,3,4,5]
btnTwo.addEventListener('click',function(){
   
    playerInputNum("playerTwoInputField",2,"playerTwoDiv","playerThreeDiv",false, arr2);
})

 const btnThree = document.querySelector("#playerThreeBtn");
 let arr3=[1,2,3,4,5]
btnThree.addEventListener('click',function(){ 
   
  playerInputNum("playerThreeInputField",3,"playerThreeDiv","playerFourDiv",false,arr3);
})

 const btnFour = document.querySelector("#playerFourBtn");
 //this arr pass for click count
 let arr4=[1,2,3,4,5]
btnFour.addEventListener('click',function(){
    
    playerInputNum("playerFourInputField",4,"playerFourDiv"," ",false,arr4);
}) 
  


function playerInputNum(
    inputFieldId,
    playerNumber,
    previousPlayerDiv,
    nextPlayerDiv,
    isFistPlayer,
    count1
  ) {
    
    const playerInputId = document.getElementById(inputFieldId);
    const firstPlayerDiv = document.getElementById(previousPlayerDiv);
    const secondPlayerDiv = document.getElementById(nextPlayerDiv);
    if (!playerInputId.value) {
      error.innerHTML = "Number Enter on Input Box";
    } else {
      if (isNaN(playerInputId.value)) {
        error.innerHTML = `"${playerInputId.value}" This value Not Support Our System. Please Type Number`;
      } else {
        if (playerInputId.value >= 1 && playerInputId.value <= 10) {
            error.innerHTML = "";
            //when player one input is come this condition execute
          if (isFistPlayer) {
            playerNum.push(playerInputId.value); 
          playerName.innerHTML = `Player ${playerNumber + 1}`;
          firstPlayerDiv.classList.add("display-none");
          secondPlayerDiv.classList.remove("display-none");

          }
             //when player two and three input is come this condition execute
          else if(!isFistPlayer && playerNumber !== 4){
            console.log( "code run form else if");
            count1.pop();
           let a = count1.length;
          chance.classList.remove("display-none");
            chance.innerHTML = `Chance ${a}`;
            if (a >= 1) {
              if (playerNum[1] == playerInputId.value) {
                playerNum.push(playerInputId.value);
                perClick=true
                firstPlayerDiv.classList.add("display-none");
                secondPlayerDiv.classList.remove("display-none");
                playerName.innerHTML = `player ${playerNumber + 1}`;
                chance.classList.add("display-none");
                //   console.log("I am from if condition" + " " + playerNum)
              
              }
             
            }
             else {
                a = 0;
              chance.innerHTML = `Chance ${a}`;
              playerNum.push(playerInputId.value);
              perClick=true
              firstPlayerDiv.classList.add("display-none");
              secondPlayerDiv.classList.remove("display-none");
              playerName.innerHTML = `Player ${playerNumber + 1}`;
              chance.classList.add("display-none");
            
              //   console.log("I am from else condition" + " " + playerNum)
            }
          }
            //when player four input is come this condition execute
           else{
            count1.pop();
             let a = count1.length;
            chance.classList.remove("display-none");
            chance.innerHTML = `Chance ${a}`;
           //a is counter
            if (a >= 1) {
                const ol = document.querySelector("#ol");
              if (playerNum[1] == playerInputId.value) {
                playerNum.push(playerInputId.value);
                perClick=true
                firstPlayerDiv.classList.add("display-none");
                //fourDiv.classList.remove("display-none");
                playerName.innerHTML = `Wining Player List`;
                chance.classList.add("display-none");
                // console.log("I am from if condition" + " " + playerNum) ;
                // console.log(playerNum);
                play1.classList.remove("display-none");

                //when four number player click when show winning player list
                playerNum?.map((playerName, index) => {
                  if (playerNum[1] == playerNum[index + 2]) {
                   // console.log("player" + " " + (index + 2));
                   play1.classList.add("display-none");
                    ol.innerHTML += `<li>Player  ${index + 2}</li>`;
                    document.querySelector(".winningPlayerList").classList.remove("display-none");
                   
                  } 
                });
              }
            } else {
             //   console.log("code run form else");
                a= 0;
              chance.innerHTML = `Chance ${a}`;
              playerNum.push(playerInputId.value);
              firstPlayerDiv.classList.add("display-none");
              //fourDiv.classList.remove("display-none");
              playerName.innerHTML = `wining Player List`;
              chance.classList.add("display-none");
              //  console.log("I am from else condition" + " " + playerNum)
              play1.classList.remove("display-none");
              playerNum?.map((playerName, index) => {
                if (playerNum[1] == playerNum[index + 2]) {
                 // console.log("player win" + " " + (index + 2));
                 play1.classList.add("display-none");
                    ol.innerHTML += `<li>player  ${index + 2}</li>`;
                      document.querySelector(".winningPlayerList").classList.remove("display-none");
                } 
              });
            }
          } 
          
        } else {
          error.innerHTML = `This Game Support 1 To 10`;
        }
      }
    }
    //this function execute for show every player clicked value
    addPlayerInputValue(playerNum,playerNumber)
  }
    let num=1
  function addPlayerInputValue(valueArr,playerPosition){
   if(num < valueArr.length){
    console.log(valueArr[num],valueArr.indexOf(valueArr[num]));
    parPlayerInputValue.innerHTML +=`<li>Player ${playerPosition} Value Counted ${valueArr[num]}</li>`
    num++;  
   }
     
  }