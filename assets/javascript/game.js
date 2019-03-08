  var flag = true;
  var flag2 = true;
  var reset = true;
  var guessed = false;
  var wins = 0;
  var losses = 0;
  var hints=[" the quality of being hot or warm","the process of making or growing goods to be sold","to say or write what someone or something is like",
  "twelve o'clock in the middle of the night","a place where people who are ill or injured","the ability to form valuable opinions and make good decisions",
  "to say numbers one after the other in order","written abbreviation lb a unit for measuring weight","a person who buys goods or a service","impossible to see"]
  var wordbank= ["heat","production","describe","midnight","hospital","judgment","count","pound","customer","invisible"];


 function start(){
    document.getElementById("wins").innerHTML=wins;
    document.getElementById("losses").innerHTML=losses;
    var word = randomarraychoose(wordbank);
    showunderscores(word);
    game(word);
 }

function showunderscores (word){
  var underscore=[];
  for (let index = 0; index < word.length; index++) {
  underscore[index]="_";
  var Text1 = document.getElementById("word-displayed");
  Text1.textContent = underscore.join(" ");}
  return underscore;
}

function imgchange(intentos){

  if (intentos == 1) {
      document.getElementById("image").src = "assets/images/image011.jpg";
   }
   else if(intentos == 2) {
     document.getElementById("image").src = "assets/images/image010.jpg";
   }
   else if(intentos == 3) {
      document.getElementById("image").src = "assets/images/image009.jpg";
    }
    else if(intentos == 4) {
      document.getElementById("image").src = "assets/images/image008.jpg";
    }
    else if(intentos == 5) {
      document.getElementById("image").src = "assets/images/image007.jpg";
    }
    else if(intentos == 6) {
      document.getElementById("image").src = "assets/images/image006.jpg";
    }
    else if(intentos == 7) {
      document.getElementById("image").src = "assets/images/image005.jpg";
    }
    else if(intentos == 8) {
      document.getElementById("image").src = "assets/images/image004.jpg";
    }
    else if(intentos == 9) {
      document.getElementById("image").src = "assets/images/image003.jpg";
    }
    else if(intentos == 10) {
      document.getElementById("image").src = "assets/images/image002.jpg";
    }

}

function randomarraychoose(array){
  var ran = Math.floor(Math.random() * array.length)
  var generator = array[ran];
  var arrayrandom = generator.split("");
  console.log(generator);
  var hintphrase = hints[ran];
  document.getElementById("hint").innerHTML=hintphrase;
  return arrayrandom;
}

function game(ar){
var intentos=10;
var underscore = showunderscores(ar);
var j = 0;
var show = "";
var guessedArray =[""];
document.onkeyup = function(event) {
//____________Check if repeated_______________//
    for (let k = 0; k < guessedArray.length; k++) {
        if (event.key==guessedArray[k]){
            flag=false;}}
    if (flag==false){}
    else{ guessedArray[j]=event.key;j++;}
    document.getElementById("Letters-guessed").innerHTML=guessedArray;
//___________Check if Guessed______________//
for (let index = 0; index < ar.length; index++) {
    if (event.key==ar[index]) {
        underscore[index]=event.key;
        show =underscore.join(" ");
        var Text1 = document.getElementById("word-displayed");
        Text1.textContent = show;
        flag=false;}}       
    if (flag==false){flag=true;}
    else{intentos=intentos-1;}
//_________Call function image change_________//
 imgchange(intentos);
//____________check if win_______________________//
var x=underscore.join("");
var y=ar.join("");
if (intentos==0)
{ alert("you Lose!");
document.getElementById("Letters-guessed").innerHTML="";
document.getElementById("Remaining").innerHTML="10";
losses++;imgchange(10);start();}
else if (x==y)
{ alert("you win!");
document.getElementById("Letters-guessed").innerHTML="";
document.getElementById("Remaining").innerHTML="10";
wins++;imgchange(10);start();}
document.getElementById("Remaining").innerHTML=intentos;
}
}

