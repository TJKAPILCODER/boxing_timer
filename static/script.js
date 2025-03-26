// This will add functionality to the HTML files (timer.html, index.html)

// The code below will run after the HTML document is fully loaded. 
document.addEventListener('DOMContentLoaded', function() {
    // Get the div element by its ID
    const myDiv = document.getElementById('myDiv');
    
    const myH1 = myDiv.querySelector('h1');
    const myP = myDiv.querySelector('p')

    // Change the text if the existing h1 and p elements in timer.html
    myH1.textContent = "New Heading Text";
    myP.textContent = "New Paragraph Text";

    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "This is new paragraph added by Javascript";

    // Append the new paragraph to the div
    myDiv.appendChild(newParagraph);

    // Change the background color of the fix
    myDiv.style.backgroundColor = 'lightblue';

    // get the button element by it's ID
    const myButton = document.getElementById("myButton");

    // Get the span element by it's ID
    const mySpan = document.getElementById("mySpan")

    // Get the toggleDiv element bu it's ID
    const toggleDiv = document.getElementById("toggleDiv")


    // Add a click event listener to the button
    myButton.addEventListener('click', function() {
        // Toggle the visibility of the toggleDiv when the button is clicked
        if (toggleDiv.style.display === 'none'){ 
            toggleDiv.style.display = 'block'
        } else {
            toggleDiv.style.display = 'none'
        }

        if(myButton.textContent === "Click Me!") {
            myButton.textContent = "Hide Div";
        } else {
            myButton.textContent = "Click Me!";
        }
    });
});