# Author: TJ Kapil
# Project: Boxing Timer
# INFO: The app.py file will contain the Python Flash code. 

from flask import Flask, render_template # This line imports the flask class from the Flask Module/Library. 

app = Flask(__name__) # This line creates an instance of the Flask Class and assigns it to the variable app. 

@app.route("/") # This is a decorater that tells Flask which URL should trigger the hello() function, in this case, it's the root URL. 
# Root is always "/"
# A decorater is a way to modify or extend the behavior of a function. 
def hello(): # This is a function named hello(), which will executed when the user visits the root url. 
    return "Hello, World!" # This line retuns the string  "Hello, World!" as a response to the user's browser. Flask will send this string
                           # as the HTML content of the page. 
@app.route("/timer") # This will add a route to the timer.html file. 
def show_timer():
    return render_template("timer.html") # This will render the timer.html pahge

# The server will automatically reload when you make changes to your code due to debug = True
if __name__ == "__main__":
    app.run(debug=True)
# detailed error messages in your browser
# Debug mode should never be used in production environments, 
# as it can expose sensitive information and slow down your application.