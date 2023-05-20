const btnOne = document.querySelector("#playerOneBtn");
const playerName=document.querySelector("#playerName");
const chance = document.querySelector(".playerChange");
const error=document.querySelector('#error');
const btnReset=document.querySelector("#btnReset");

let playerNum=[""];


btnOne.addEventListener('click',function(){
    playerInputNum("playerOneInputField",2,"playerOneDiv","playerTwoDiv",true);
})

const btnTwo = document.querySelector("#playerTwoBtn");
let arr2=[1,2,3,4,5]
btnTwo.addEventListener('click',function(){
   
    playerInputNum("playerTwoInputField",3,"playerTwoDiv","playerThreeDiv",false, arr2);
})

 const btnThree = document.querySelector("#playerThreeBtn");
 let arr3=[1,2,3,4,5]
btnThree.addEventListener('click',function(){
  
    playerInputNum("playerThreeInputField",4,"playerThreeDiv","playerFourDiv",false,arr3);
})

 const btnFour = document.querySelector("#playerFourBtn");
 let arr4=[1,2,3,4,5]
btnFour.addEventListener('click',function(){
    
    playerInputNum("playerFourInputField",5,"playerFourDiv"," ",false,arr4);
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
          if (isFistPlayer) {
            playerNum.push(playerInputId.value); 
          playerName.innerHTML = `Player ${playerNumber}`;
          firstPlayerDiv.classList.add("d-none");
          secondPlayerDiv.classList.remove("d-none");

          }

          else if(!isFistPlayer && playerNumber !== 5){
            console.log( "code run form else if");
            count1.pop();
           let a = count1.length;
          chance.classList.remove("d-none");
            chance.innerHTML = `Chance ${a}`;
            if (a >= 1) {
              if (playerNum[1] == playerInputId.value) {
                playerNum.push(playerInputId.value);
                firstPlayerDiv.classList.add("d-none");
                secondPlayerDiv.classList.remove("d-none");
                playerName.innerHTML = `player ${playerNumber}`;
                chance.classList.add("d-none");
                //   console.log("I am from if condition" + " " + playerNum)
              }
             
            }
             else {
                a = 0;
              chance.innerHTML = `Chance ${a}`;
              playerNum.push(playerInputId.value);
              firstPlayerDiv.classList.add("d-none");
              secondPlayerDiv.classList.remove("d-none");
              playerName.innerHTML = `Player ${playerNumber}`;
              chance.classList.add("d-none");
              //   console.log("I am from else condition" + " " + playerNum)
            }
          }

           else{
            count1.pop();
             let a = count1.length;
            chance.classList.remove("d-none");
            chance.innerHTML = `Chance ${a}`;
            //  console.log(count)
            if (a >= 1) {
                const ol = document.querySelector("#ol");
              if (playerNum[1] == playerInputId.value) {
                playerNum.push(playerInputId.value);
                firstPlayerDiv.classList.add("d-none");
                //fourDiv.classList.remove("d-none");
                playerName.innerHTML = `Wining Player List`;
                chance.classList.add("d-none");
                // console.log("I am from if condition" + " " + playerNum) ;
                // console.log(playerNum);
                let playerOne = true;
                playerNum?.map((playerName, index) => {
                  if (playerNum[1] == playerNum[index + 2]) {
                   // console.log("player" + " " + (index + 2));
                    ol.innerHTML += `<li>Player  ${index + 2}</li>`;
                    document.querySelector(".winningPlayerList").classList.remove("d-none");
                    playerOne = false;
                  } else {
                    if (index == playerNum.length - 1 && playerOne) {
                      //console.log("player" + " " + 1);
                      ol.innerHTML = `<li>Player 1</li>`;
                      document.querySelector(".winningPlayerList").classList.remove("d-none");

                    }
                  }
                });
              }
            } else {
                console.log("code run form else");
                a= 0;
              chance.innerHTML = `Chance ${a}`;
              playerNum.push(playerInputId.value);
              firstPlayerDiv.classList.add("d-none");
              //fourDiv.classList.remove("d-none");
              playerName.innerHTML = `wining Player List`;
              chance.classList.add("d-none");
              //  console.log("I am from else condition" + " " + playerNum)
              
              playerNum?.map((playerName, index) => {
                let playerOne = true;
                if (playerNum[1] == playerNum[index + 2]) {
                 // console.log("player win" + " " + (index + 2));
                    ol.innerHTML += `<li>player  ${index + 2}</li>`;
                      document.querySelector(".winningPlayerList").classList.remove("d-none");

                  playerOne = false;
                } else {
                  if (index == playerNum.length - 1 && playerOne) {
                   // console.log("player" + " " + 1);
                        ol.innerHTML = `<li>player 1</li>`;
                      document.querySelector(".winningPlayerList").classList.remove("d-none");

                  }
                }
              });
            }
          } 
          
        } else {
          error.innerHTML = `This Game Support 1 To 10`;
        }
      }
    }
  }
  