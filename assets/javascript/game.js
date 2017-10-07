//check your console in the inspect to make sure you linked your javascript appropriately


var hullStrengthMax = 100;
var booty = 20;
var hullStrength = 100;
var shipsSunk = 0;





$(document).ready(function setUp() {
document.getElementById("booty").innerHTML = booty + " gold";
document.getElementById("shipsSunk").innerHTML = "ships Sunk: " + shipsSunk;
// function setUp(){
  /*----------alphabet generator-------------------------------------------------*/

  var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",""];
  for (var j = 0; j < alpha.length; j++) {
    var letterRetrieve = 0;
    document.getElementById("alphaHolder").innerHTML = alpha.join(" ");
    letterRetrieve++;
  }

  /*----------determine random category------------------------------------------*/
  var categories = ["People", "Things", "Locations", "Phrases"];
  var categoriesIndex = Math.floor(Math.random() * categories.length);
  document.getElementById("guessContainer").innerHTML = categories[categoriesIndex];

  /*--------generating a random word based on the category-----------------------*/
  var wordBank;
  if (categoriesIndex === 0) {
    wordBank = ["firstmate", "blackbeard", "redbeard", "daveyjones", "captainhook", "jacksparrow"];
  } else if (categoriesIndex === 1) {
    wordBank = ["booty", "pegleg", "sharkbait", "plunder", "treasuremap", ""];
  } else if (categoriesIndex === 2) {
    wordBank = ["crowsnest", "captainsquarters", "lagoon", "cove"];
  } else if (categoriesIndex === 3) {
    wordBank = ["yarr", "yoho", "shivermetimbers","theresheblows" ];
  }
  var wordBankIndex = Math.floor(Math.random() * wordBank.length);
  var mysteryWord = wordBank[wordBankIndex];

  /*Converts mysteryWord to mysteryWordArray-------------------------------------*/
  var mysteryWordArray = mysteryWord.split("");
  var mysteryWordArray2 =  mysteryWord.split("");
  for (var m = 0; m < mysteryWordArray.length; m++) {
    var letterPull = 0;
    document.getElementById("wordContainer").innerHTML = mysteryWordArray.join(" ");
    letterPull++;

  }

  /*Converts mysteryWordArray to an array with a "_" for each lettery in the word*/
  var mysteryWordHidden = mysteryWordArray;
  for(var i=0; i<mysteryWordHidden.length; i++){
  mysteryWordHidden.splice(i, 1, "_" );
  }
  document.getElementById("wordContainer").innerHTML = mysteryWordHidden.join(" ");


/*Problem solved--------------------------------------------------------*/
  document.getElementById("success").onclick = function(){
    if(mysteryWordArray.indexOf("_") === -1){
      booty += 20;
      shipsSunk += 1;
      document.getElementById("shipsSunk").innerHTML = shipsSunk;
      document.getElementById("booty").innerHTML = booty + " gold";
      setUp();
      console.log(shipsSunk);
    }else if(shipsSunk<=3){
      hullStrength -=2;
    }else if(shipsSunk <= 6){
      hullStrength -=3;
    }else if(shipsSunk <=9){
      hullStrength -=4;
    }
  };


/*Ship repair-----------------------------------------------------------*/
document.getElementById("repair").onclick = function(){
  console.log("hey");
  if(booty > 10){
    booty -=10;
    document.getElementById("booty").innerHTML = booty + " gold";
    hullStrength += 10;
    document.getElementById("hullStrength").innerHTML= hullStrength + "%";
  }else{
    alert("Yee be Too Poor for that!");
    hullStrength -= 5;
      document.getElementById("hullStrength").innerHTML= hullStrength + "%";
  }
};
/*keypress function-----------------------------------------------------*/
  document.onkeyup = function(event) {
    var guessKey = event.key;
    var guessArrayNumber = alpha.indexOf(guessKey);

    document.getElementById("botLeft").innerHTML = guessKey;
    document.getElementById("botRight").innerHTML = guessKey;
    document.getElementById("dynamicText").innerHTML = "Fire!!!";


    /*section activates wordbank-------------------------------------------------*/


    alpha.splice(guessArrayNumber, 1, "_");
    for (var j = 0; j < alpha.length; j++) {
      var letterRetrieve = 0;
      document.getElementById("alphaHolder").innerHTML = alpha.join(" ");
      letterRetrieve++;
    }


  /*DETERMINE IF LETTER IS IN hiddenWord-----------------------------------------*/

      if(mysteryWordArray2.indexOf(guessKey) !== -1 ){
         for(var i=0; i<mysteryWordArray2.length; i++){
            if( guessKey === mysteryWordArray2[i] ){
            mysteryWordArray[i] = guessKey;
        document.getElementById("wordContainer").innerHTML = mysteryWordArray.join(" ");}}

/*shipdamageincreases with more ships sunk-------------------------------*/
      }else if(shipsSunk<=3){
        hullStrength -=2;
        document.getElementById("hullStrength").innerHTML= hullStrength + "%";
      }else if(shipsSunk <= 6){
        hullStrength -=3;
        document.getElementById("hullStrength").innerHTML= hullStrength + "%";
      }else{
        hullStrength -=4;
        document.getElementById("hullStrength").innerHTML= hullStrength + "%";
        if(hullStrength <0){
          alert("Ye be sunk Matey!");
          var r = confirm("Try yer Luck again?");
            if (r===true){
              alert("good on ya!");
              hullStrength = 100;
              setUp();
              document.getElementById("hullStrength").innerHTML = hullStrength + "%";

              //reset();
            }else{
              alert("to the locker with ya!");
            }

        }
      }
  };

}); // closes document.ready
