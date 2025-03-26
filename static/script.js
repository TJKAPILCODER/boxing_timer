// This will add functionality to the HTML files (timer.html, index.html)

// The code below will run after the HTML document is fully loaded. 
document.addEventListener('DOMContentLoaded', function() {
    // This will get the html element with the ID 'myDiv'
    // This can be used to manipulate the content and style of the div. 
    const myDiv = document.getElementById('myDiv')

    // This will change the HTML conent inside the div.
    // We're replacing what currently in myDiv h1, p1 with new content. 
    myDiv.innerHTML = '<h1>New Content from JavaScript!</h1><p>This paragraph was added by  JavaScript</p>';

    // This will change the hackgorund color of my deiv to light blue. 
    // this demostates how to modify the style of an element using JavaScript.
    myDiv.style.backgroundColor = 'lightblue'
});