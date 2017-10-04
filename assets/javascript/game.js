// var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var text = "";
// var i;
// for (i = 0; i < alpha.length; i++) {
//     text += alpha[i] + "<br>";
// }
// document.getElementById("alphaHolder").innerHTML = text;

// var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// var text = "";
// var i;
// for (i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }
// document.getElementById("alphaHolder").innerHTML = "God please work!";

<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="UTF-8">
  <title>Rock Paper Scissors Part 2
  </title>
</head>

<body>

  <div id="game">

  </div>

  <script type="text/javascript">

    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["r", "p", "s"];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Alerts the key the user pressed (userGuess).
      alert("User guess: " + userGuess);

      // Alerts the Computer's guess.
      alert("Computer guess: " + computerGuess);

    };
  </script>

</body>

</html>
