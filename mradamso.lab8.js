// DOM elements
const fireBtn = document.getElementById('fire-btn');
const waterBtn = document.getElementById('water-btn');
const earthBtn = document.getElementById('earth-btn');
const userSelectionDisplay = document.getElementById('user-selection');
const cpuSelectionDisplay = document.getElementById('cpu-selection');
const gameResultDisplay = document.getElementById('game-result');

// Add event listeners to the buttons
fireBtn.addEventListener('click', () => playGame('FIRE'));
waterBtn.addEventListener('click', () => playGame('WATER'));
earthBtn.addEventListener('click', () => playGame('EARTH'));

// Get CPU choice
function getCpuChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1; 
  if (randomNum === 1) return "WATER";
  if (randomNum === 2) return "FIRE";
  return "EARTH"; 
}

// Determine winner
function determineWinner(userChoice, cpuChoice) {
  if (userChoice === cpuChoice){
    return "Great minds think alike (Tied)";
  }
  
  /**
   * water beats fire
   * fire beats earth
   * Earth beats water
   */
  if (
    (userChoice === "FIRE" && cpuChoice === "EARTH") ||
    (userChoice === "WATER" && cpuChoice === "FIRE") ||
    (userChoice === "EARTH" && cpuChoice === "WATER")
  ) {
    return "You beat me! *explodes*";
  } else {
    return "Muwahaha you lose! >:D";
  }
}

// Main game function
function playGame(userChoice) {
  // Update user's choice display
  userSelectionDisplay.textContent = userChoice;
  
  // Get CPU choice
  const cpuChoice = getCpuChoice();
  cpuSelectionDisplay.textContent = cpuChoice;
  
  // Determine and display the winner
  const result = determineWinner(userChoice, cpuChoice);
  gameResultDisplay.textContent = result;
  
  // Highlight the result with appropriate styling
  if (result.includes("beat me")) {
    gameResultDisplay.style.color = "rgb(100, 255, 100)"; // Green for victory
  } else if (result.includes("lose")) {
    gameResultDisplay.style.color = "rgb(255, 100, 100)"; // Red for defeat
  } else {
    gameResultDisplay.style.color = "rgb(247, 157, 48)"; // Orange for tie
  }
}