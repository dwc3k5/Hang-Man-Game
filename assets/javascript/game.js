//check your console in the inspect to make sure you linked your javascript appropriately

var hullStrength = 100;
var hullStrengthMax = 100;
var booty = 20;

document.getElementById("booty").innerHTML = booty + " gold";
// document.getElementById()
/*----------alphabet generator-------------------------------------------------*/
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",""];
for (var j = 0; j < alpha.length; j++) {
  var letterRetrieve = 0;
  document.getElementById("alphaHolder").innerHTML = alpha.join(" ");
  letterRetrieve++;
}
// console.log("alpha.indexOf('a')" +alpha.indexOf("a"));
// console.log("alpha.indexOf('a')" +alpha.indexOf("b"));
// console.log("alpha.indexOf('a')" +alpha[0]);



/*----------determine random category------------------------------------------*/
var categories = ["People", "Things", "Locations", "Phrases"];
var categoriesIndex = Math.floor(Math.random() * categories.length);
document.getElementById("guessContainer").innerHTML = categories[categoriesIndex];


/*--------generating a random word based on the category-----------------------*/
var wordBank;
if (categoriesIndex === 0) {
  wordBank = ["first_mate", "blackbeard", "redbeard", "daveyjones", "captainhook", "jacksparrow"];
} else if (categoriesIndex === 1) {
  wordBank = ["booty", "pegleg", "sharkbait", "plunder", "treasuremap"];
} else if (categoriesIndex === 2) {
  wordBank = ["crowsnest", "captains quarters", "lagoon", "cove"];
} else if (categoriesIndex === 3) {
  wordBank = ["yarr", "yoho", "shivermetimbers","" ];
}
var wordBankIndex = Math.floor(Math.random() * wordBank.length);
var mysteryWord = wordBank[wordBankIndex];


/*Converts mysteryWord to mysteryWordArray-------------------------------------*/
var mysteryWordArray = mysteryWord.split("");
var mysteryWordArray2 =  mysteryWord.split("");
for (var j = 0; j < mysteryWordArray.length; j++) {
  var letterRetrieve = 0;
  document.getElementById("wordContainer").innerHTML = mysteryWordArray.join(" ");
  letterRetrieve++;
}


/*Converts mysteryWordArray to an array with a "_" for each lettery in the word*/
//DEV note: this is converting both hidden and array to be blank
var mysteryWordHidden = mysteryWordArray;
// console.log("mysteryWordArray " + mysteryWordArray);
for(var i=0; i<mysteryWordHidden.length; i++){
mysteryWordHidden.splice(i, 1, "_" );
// console.log("mysteryWordHidden " + mysteryWordHidden);
}
document.getElementById("wordContainer").innerHTML = mysteryWordHidden.join(" ");
// console.log("mysteryWordHidden " + mysteryWordHidden);
// console.log("mysteryWordArray " + mysteryWordArray);


/*keypress function------------------------------------------------------------*/
document.onkeyup = function(event) {
  var guessKey = event.key;
  var guessArrayNumber = alpha.indexOf(guessKey);

  document.getElementById("botLeft").innerHTML = guessKey;
  document.getElementById("botRight").innerHTML = guessKey;
  document.getElementById("dynamicText").innerHTML = "Fire!!!";
  // document.getElementById('name-logo').style.img = "url('my.gif?v=" + new Date().valueOf() + "')";

  /*section activates wordbank-------------------------------------------------*/



  alpha.splice(guessArrayNumber, 1, "_");
  for (var j = 0; j < alpha.length; j++) {
    var letterRetrieve = 0;
    document.getElementById("alphaHolder").innerHTML = alpha.join(" ");
    letterRetrieve++;
  }


/*DETERMINE IF LETTER IS IN hiddenWord-----------------------------------------*/
    console.log("guessKey " + guessKey);
    console.log("mysteryWordArray2" + mysteryWordArray2);
    console.log("mysteryWordArray" + mysteryWordArray);
    if(mysteryWordArray2.indexOf(guessKey) !== -1 ){
       for(var i=0; i<mysteryWordArray2.length; i++){
          if( guessKey === mysteryWordArray2[i] ){
          mysteryWordArray[i] = guessKey;
      document.getElementById("wordContainer").innerHTML = mysteryWordArray.join(" ");}}
    }else{
      hullStrength -= 2;
      document.getElementById("hullStrength").innerHTML= hullStrength + "%";
      // document.getElementById("healthBar").width = hullStrength-hullStrengthMax;

    }
};
//
// if( hullStrength >= 66){
//   document.getElementById("healthBar").style.color = "blue";
// }else if(hullStrength >=33){
//   document.getElementById("healthBar").style.color = "yellow";
// }else{
//   document.getElementById("healthBar").style.color = "red";
// }



// set timeout
