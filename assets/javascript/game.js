
//event listen for key to start game
//random word generate from the array and display letter blanks. 
//event listen for first letter guess
//fill the word with any correct guess
//document the incorrect guesses 
//display winning image and add to win counter 

var wins = 0 
//guesses left counter




// word and letter arrays 
var alphabet = ["A", "B", "C", "D", "E", "F", "G",
 "H", "I", "J", "K", "L", "M", "N", "O", "P", 
 "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

var words = ['BASKETBALL', 'FOUL', 'THREE', 'LEBRON', 
'DUNK', 'PASS', 'SHOOT', 'FREE THROW', 'CHAMPION', 'FREE AGENT', 'LAKERS', 'CAVS']

var randWord = words[Math.floor(Math.random() * words.length)];


console.log(randWord)
document.getElementById("test").innerHTML = 7


  // Show lives left and drop with incorrect guess



