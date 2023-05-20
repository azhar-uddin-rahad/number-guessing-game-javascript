const btnOne = document.querySelector("#playerOneBtn");
let playerNum=[""]
btnOne.addEventListener('click',function(){
    playerInputNum(
        "playerOneInputField",
        2,
        "playerOneDiv",
        "playerTwoDiv",
        true
      );
})






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
  