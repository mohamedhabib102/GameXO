const dataPlayer = document.querySelector(".data-player");
const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
const xOrOValue = document.getElementById("playerx-or-o");
const submitData = document.getElementById("submit-data");





dataPlayer.addEventListener("submit", (e) => {
    e.preventDefault()
    // Get Name Players
    let nameOne = playerOne.value;
    let nameTwo = playerTwo.value;

    // Get X or O value
    let xOrO = xOrOValue.value;

    // Save Data Player In Local Storage
    localStorage.setItem("player-one", nameOne);
    localStorage.setItem("player-two", nameTwo);
    localStorage.setItem("x-or-o", xOrO);

    playerOne.value = "";
    playerTwo.value = "";
    xOrOValue.value = "";

    // Go To Home Page Game
    document.location.href = "game.html";
})


// Reset Value On The Inputs
submitData.addEventListener("click", () => {
})
