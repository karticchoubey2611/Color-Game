var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setMode();
    setSquares();
    reset();
}

function setMode() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            reset();

        });
    }
}

function setSquares() {
    for (var i = 0; i < squares.length; i++) {
        // adding initial colors to squares
        // add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare the color to picked color
            if (pickedColor === clickedColor) {

                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;

            } else {
                this.style.backgroundColor = " #232323";
                messageDisplay.textContent = "Try Again";
            }

        });

    }
}



function reset() {

    // generate all new colors
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }

    h1.style.backgroundColor = "steelblue";

}


resetButton.addEventListener("click", function() {
    reset();
});

function changeColor(color) {
    for (var j = 0; j < squares.length; j++) {
        squares[j].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * (colors.length));
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
        //get random color and push into array 
    }
    //return
    return arr;
}

function randomColor() {
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}