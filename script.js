// play.js

let winCount = 0;
let lossCount = 0;

function chooseNumber(playerChoice) {
    const winningNumber = Math.floor(Math.random() * 5) + 1; // Angka acak antara 1 dan 5
    if (playerChoice === winningNumber) {
        winCount++;
        alert("Selamat, Anda menang! Angka yang benar adalah " + winningNumber);
    } else {
        lossCount++;
        alert("Maaf, Anda kalah. Angka yang benar adalah " + winningNumber);
    }
    updateStats();
}

function updateStats() {
    document.getElementById("winCount").textContent = winCount;
    document.getElementById("lossCount").textContent = lossCount;
}

function resetStats() {
    winCount = 0;
    lossCount = 0;
    updateStats();
}
