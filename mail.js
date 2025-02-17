let attempts = 5;
let timeRemaining = 120;
let timerInterval;
let messageArray = [
  "Oww nooo!",
  "Oww Shi!", 
  "Nahh Uhhh!",
  "Try Again!",
];

function startTimer() {
  timerInterval = setInterval(function() {
    if (timeRemaining > 0) {
      timeRemaining--;
      document.getElementById("timer").innerText = timeRemaining;
    } else {
      clearInterval(timerInterval);
      document.getElementById("submitButton").disabled = true;
      document.getElementById("answer").disabled = true;
      document.getElementById("message").innerText = "Time's up! Try again.";
      showTryAgainButton();
    }
  }, 1000);
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim();
  const correctAnswer = "ang aking inang mapagmahal at mabait";

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    clearInterval(timerInterval);
    document.getElementById("message").innerText = "✔️✔️✔️";
    document.getElementById("submitButton").disabled = true;
    document.getElementById("answer").disabled = true;
  } else {
    attempts--;
    document.getElementById("attempts").innerHTML =`(&nbsp;<strong style="color: #03e9f4;">${attempts}</strong>&nbsp;)&nbsp;attempts`;

    if (attempts === 0 || timeRemaining === 0) {
      clearInterval(timerInterval);
      document.getElementById("submitButton").disabled = true;
      document.getElementById("answer").disabled = true;
      document.getElementById("message").innerText = "No attempts left!";
      showTryAgainButton();
    } else {
      document.getElementById("message").innerText = messageArray[attempts - 1];
    }
  }
}

function showTryAgainButton() {
  const overlay = document.getElementById("overlay");
  const message = document.getElementById("overlayMessage");

  overlay.style.display = "block";

  if (attempts === 0 || timeRemaining === 0) {
    message.innerText = "❌❌❌";
  } else {
    message.innerText = "Oww nooo!";
  }
}

function resetGame() {
  attempts = 5;
  timeRemaining = 120;
  document.getElementById("attempts").innerHTML = `(&nbsp;<strong style="color: #03e9f4;">${attempts}</strong>&nbsp;)&nbsp;attempts`;
  document.getElementById("message").innerText = "";
  document.getElementById("answer").disabled = false;
  document.getElementById("submitButton").disabled = false;
  document.getElementById("answer").value = "";
  document.getElementById("overlay").style.display = "none"; 
  startTimer();
}

startTimer();
