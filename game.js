var main = function () {
    // the user guesses
    var userGuess1 = document.getElementById("guess1").value; 
    var userGuess2 = document.getElementById("guess2").value;
    var userGuess3 = document.getElementById("guess3").value;
    // the computer's lucky number
    var magicNumber = Math.ceil(Math.random() * 10); 
    
    
    if (userGuess1 == magicNumber || userGuess2 == magicNumber || userGuess3 == magicNumber){
        alert("Good job, you got it!. Today and tomorrow are gonna be a lucky day for you." + 
            " The luck number was " + magicNumber);
        var elem = document.createElement("img");
        elem.setAttribute("src", "images/success.jpg");
        elem.setAttribute("alt", "success");
        document.getElementById("surprise").appendChild(elem);
    } else {
        alert("Sorry, you lost the lucky number was " + magicNumber);
        var elem1 = document.createElement("img");
        elem1.setAttribute("src", "images/fail.png");
        elem1.setAttribute("alt", "failure");
        document.getElementById("surprise").appendChild(elem1);
    }

    document.getElementById("subBtn").disabled = true;
};
