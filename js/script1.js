const btnOne = document.querySelector("#playerOneBtn");
const btnTwo = document.querySelector("#playerTwoBtn");
const chance = document.querySelector(".playerChange");
let playerNum = [];

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
        chance.classList.remove("d-none");
        chance.innerHTML=`chance ${count}`;
        console.log(count)
        if(count >=1){
            if(playerNum[0] == secondInputField.value){
                playerNum.push(secondInputField.value);
                fistDiv.classList.add("d-none");
                secondDiv.classList.remove("d-none");
                playerName.innerHTML = `player 3`;
                chance.classList.add("d-none");
                console.log("I am from if condition" + " " + playerNum) 
            }
        }
        else{
            count=0;
            chance.innerHTML=`chance ${count}`;
            playerNum.push(secondInputField.value);
            fistDiv.classList.add("d-none");
             secondDiv.classList.remove("d-none");
             playerName.innerHTML = `player 3`;
             chance.classList.add("d-none");
             console.log("I am from else condition" + " " + playerNum) 

        }
       
       
        /* playerNum.push(secondInputField.value);
        error.innerHTML = "";
        playerName.innerHTML = `player ${playerNumber}`;
        fistDiv.classList.add("d-none");
        secondDiv.classList.remove("d-none"); */
      }
       else {
        error.innerHTML = `This Game Support 1 To 10`;
      }
    }
  }
});


/* const ThirdInputField = document.querySelector("#playerTwoInputField");
 fistDiv = document.querySelector("#playerTwoDiv");
 secondDiv = document.querySelector("#playerThreeDiv");
 count = 5;
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
        chance.classList.remove("d-none");
        chance.innerHTML=`chance ${count}`;
        console.log(count)
        if(count >=1){
            if(playerNum[0] == secondInputField.value){
                playerNum.push(secondInputField.value);
                fistDiv.classList.add("d-none");
                secondDiv.classList.remove("d-none");
                playerName.innerHTML = `player 3`;
                chance.classList.add("d-none");
                console.log("I am from if condition" + " " + playerNum) 
            }
        }
        else{
            count=0;
            chance.innerHTML=`chance ${count}`;
            playerNum.push(secondInputField.value);
            fistDiv.classList.add("d-none");
             secondDiv.classList.remove("d-none");
             playerName.innerHTML = `player 3`;
             chance.classList.add("d-none");
             console.log("I am from else condition" + " " + playerNum) 

        }
       
      }
       else {
        error.innerHTML = `This Game Support 1 To 10`;
      }
    }
  }
});

 */







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
        firstPlayerDiv.classList.add("d-none");
        secondPlayerDiv.classList.remove("d-none");
      } else {
        error.innerHTML = `This Game Support 1 To 10`;
      }
    }
  }
}
