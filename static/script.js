// This will add functionality to the HTML files (timer.html, index.html)

// The code below will run after the HTML document is fully loaded. 
document.addEventListener('DOMContentLoaded', function() {

// VARIABLES ----------------------------------------------------------------------------------------------------------
    // document is a special object that reads the whole HTML page
    // addEventListener will tell the browser to do somethign when the pge is finished loading
    // After the page has fincshed loding "DOMContenedLoaled, then the function is what happens"

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

    // Function to start the timer when the start button is clicked. 
    function startTimer() {
        if (!isTimerRunning) { // So we are checking if the timer is not running
            isTimerRunning = true; // make the timer run so true
            startButton.style.display = 'none' // start button goes away
            pauseButton.style.display = 'block' // pause button goes away
            resetbutton.style.display = 'reset' // reset button goes away
            
            updateTimeDisplay() // intial time showed on the page

            timerInterval = setInterval(() => {
                



            }, 1000);


        }
    }

    function pauseTimer() {

    }

    function resetTimer() {

    }

    
// Event Listenrs: Basically each time a button is clicked, this are linked to one of the function above (4), 
// depending on what button is clicked. 



    });