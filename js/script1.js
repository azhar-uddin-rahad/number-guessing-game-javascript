
console.log("script1.js")
const play1=document.querySelector('#playerEnterValue');
const btnOne = document.querySelector("#playerOneBtn");
const btnTwo = document.querySelector("#playerTwoBtn");
const chance = document.querySelector(".playerChange");
let playerNum = [""];

 

btnOne.addEventListener("click", function () {
  playerInputNum(
    "playerOneInputField",
    2,
    "playerOneDiv",
    "playerTwoDiv",
    true
  );
  //  console.log(playerNum);
});

const secondInputField = document.querySelector("#playerTwoInputField");
let fistDiv = document.querySelector("#playerTwoDiv");
let secondDiv = document.querySelector("#playerThreeDiv");
let count = 5;

btnTwo.addEventListener("click", function () {
  if (!secondInputField.value) {
    error.innerHTML = "Number Enter on Input Box";
  } else {
    if (isNaN(secondInputField.value)) {
      error.innerHTML = `"${secondInputField.value}" This value Not Support Please Type Name`;
    } else {
      if (secondInputField.value >= 1 && secondInputField.value <= 10) {
        error.innerHTML = "";
        count--;
        chance.classList.remove("display-none");
        chance.innerHTML = `chance ${count}`;
        // console.log(count)
        if (count >= 1) {
          if (playerNum[1] == secondInputField.value) {
            playerNum.push(secondInputField.value);
            fistDiv.classList.add("display-none");
            secondDiv.classList.remove("display-none");
            playerName.innerHTML = `player 3`;
            chance.classList.add("display-none");
            //   console.log("I am from if condition" + " " + playerNum)
          }
        }
         else {
          count = 0;
          chance.innerHTML = `chance ${count}`;
          playerNum.push(secondInputField.value);
          fistDiv.classList.add("display-none");
          secondDiv.classList.remove("display-none");
          playerName.innerHTML = `player 3`;
          chance.classList.add("display-none");
          //   console.log("I am from else condition" + " " + playerNum)
        }

        /* playerNum.push(secondInputField.value);
        error.innerHTML = "";
        playerName.innerHTML = `player ${playerNumber}`;
        fistDiv.classList.add("display-none");
        secondDiv.classList.remove("display-none"); */
      } else {
        error.innerHTML = `This Game Support 1 To 10`;
      }
    }
  }
});

const ThirdInputField = document.querySelector("#playerThreeInputField");
const ThirdBtn = document.querySelector("#playerThreeBtn");
const threeDiv = document.querySelector("#playerThreeDiv");
const fourDiv = document.querySelector("#playerFourDiv");
let chaneforPlayer3rd = 5;
ThirdBtn.addEventListener("click", function () {
  if (!ThirdInputField.value) {
    error.innerHTML = "Number Enter on Input Box";
  } else {
    if (isNaN(ThirdInputField.value)) {
      error.innerHTML = `"${ThirdInputField.value}" This value Not Support Please Type Name`;
    } else {
      if (ThirdInputField.value >= 1 && ThirdInputField.value <= 10) {
        error.innerHTML = "";
        chaneforPlayer3rd--;
        chance.classList.remove("display-none");
        chance.innerHTML = `chance ${chaneforPlayer3rd}`;
        // console.log(count)
        if (chaneforPlayer3rd >= 1) {
          if (playerNum[1] == ThirdInputField.value) {
            playerNum.push(ThirdInputField.value);
            threeDiv.classList.add("display-none");
            fourDiv.classList.remove("display-none");
            playerName.innerHTML = `player 4`;
            chance.classList.add("display-none");

            // console.log("I am from if condition" + " " + playerNum)
          }
        } else {
          chaneforPlayer3rd = 0;
          chance.innerHTML = `chance ${chaneforPlayer3rd}`;
          playerNum.push(ThirdInputField.value);
          threeDiv.classList.add("display-none");
          fourDiv.classList.remove("display-none");
          playerName.innerHTML = `player 4`;
          chance.classList.add("display-none");

          //console.log("I am from else condition" + " " + playerNum)
        }
      } else {
        error.innerHTML = `This Game Support 1 To 10`;
      }
    }
  }
});


const ForthInputField = document.querySelector("#playerFourInputField");
const ForthdBtn = document.querySelector("#playerFourBtn");
const ForthDiv = document.querySelector("#playerFourDiv");
const Div = document.querySelector("#playerFourDiv");
let chaneforPlayer4th = 5;
ForthdBtn.addEventListener("click", function () {
  if (!ForthInputField.value) {
    error.innerHTML = "Number Enter on Input Box";
  } else {
    if (isNaN(ForthInputField.value)) {
      error.innerHTML = `"${ForthInputField.value}" This value Not Support Please Type Name`;
    } else {
      if (ForthInputField.value >= 1 && ForthInputField.value <= 10) {
        error.innerHTML = "";
        chaneforPlayer4th--;
        chance.classList.remove("display-none");
        chance.innerHTML = `chance ${chaneforPlayer4th}`;
        //  console.log(count)
        if (chaneforPlayer4th >= 1) {
          const ol = document.querySelector("#ol");
          if (playerNum[1] == ForthInputField.value) {
            playerNum.push(ForthInputField.value);  
            ForthDiv.classList.add("display-none");
            //fourDiv.classList.remove("display-none");
            playerName.innerHTML = `wining Player List`;
            chance.classList.add("display-none");
            // console.log("I am from if condition" + " " + playerNum) ;
            console.log(playerNum);
            let playerOne = true;
            play1.classList.remove("display-none");
            playerNum?.map((playerName, index) => {
              if (playerNum[1] == playerNum[index + 2]) {
                play1.classList.add("display-none");
                ol.innerHTML += `<li>player  ${index + 2}</li>`;
                document.querySelector(".winningPlayerList").classList.remove("display-none");
              } 
              
              
            });
          }
        } else {
          chaneforPlayer4th = 0;
          chance.innerHTML = `chance ${chaneforPlayer4th}`;
          playerNum.push(ForthInputField.value);
          ForthDiv.classList.add("display-none");
          playerName.innerHTML = `wining Player List`;
          chance.classList.add("display-none"); 
          console.log(playerNum);
          play1.classList.remove("display-none");
          playerNum?.map((playerName, index) => {
            if (playerNum[1] == playerNum[index + 2]) {
                play1.classList.add("display-none");
                ol.innerHTML += `<li>player  ${index + 2}</li>`;
                  document.querySelector(".winningPlayerList").classList.remove("display-none");
            }   
            
          });
        }
      } else {
        error.innerHTML = `This Game Support 1 To 10`;
      }
    }
  }
});

function playerInputNum(
  inputFieldId,
  playerNumber,
  previousPlayerDiv,
  nextPlayerDiv,
  check
) {
  const playerInputId = document.getElementById(inputFieldId);
  const firstPlayerDiv = document.getElementById(previousPlayerDiv);
  const secondPlayerDiv = document.getElementById(nextPlayerDiv);
  if (!playerInputId.value) {
    error.innerHTML = "Number Enter on Input Box";
  } else {
    if (isNaN(playerInputId.value)) {
      error.innerHTML = `"${playerInputId.value}" This value Not Support Please Type Name`;
    } else {
      if (playerInputId.value >= 1 && playerInputId.value <= 10) {
        if (check) {
          playerNum.push(playerInputId.value);
        }
        error.innerHTML = "";
        playerName.innerHTML = `player ${playerNumber}`;
        firstPlayerDiv.classList.add("display-none");
        secondPlayerDiv.classList.remove("display-none");
      } else {
        error.innerHTML = `This Game Support 1 To 10`;
      }
    }
  }
}
