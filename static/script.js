// This will add functionality to the HTML files (timer.html, index.html)

// The code below will run after the HTML document is fully loaded. 
document.addEventListener('DOMContentLoaded', function() {

// VARIABLES ----------------------------------------------------------------------------------------------------------

    // Get the timer display elements and assign them to variables. 
   const roundDisplay = document.getElementById("roundDisplay"); // Get the "roundDisplay" HTML element
   const timeDisplay = document.getElementById("timeDisplay"); // Get the "timeDisplay" HTML element

   // Get the Start, Payse, reset buttons and assign them to variables
   const startButton = document.getElementById("startButton"); // Get the HTML element with the ID "startButton"
   const pauseButton = document.getElementById("pauseButton"); // Get the HTML element with the ID "pausebutton"
   const resetButton = document.getElementById("resetButton"); // Get the HTML element with the ID "resetButton"

    // Timer variables
    let roundNumber = 1; // intially round number is initialized to 1
    let roundTimeSeconds = 10; // Intially intialized time to 10 seconds for testing, will be changed based on user selection
    let timeRemaining = roundTimeSeconds;
    let timerInterval; // Store interval ID for the Timer
    let isTimerRunning = false; // boolean to check if timeer is running or not. 



    // FUNCTIONS ----------------------------------------------------------------------------------------------------------

    // Function that will update the time display, so every second the minutes and seconds will be calculated and put in a format mm:ss
    function updateTimeDisplay() {
        const minutes = Math.floor(timeRemaining/60) // the minutes remaining
        const seconds = (timeRemaining/60) // the seconds remaining
        // update display with formatted time
        timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    }

    });