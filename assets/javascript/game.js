
var flag = true;
var intentos=10;
var guessed = false;
var hints=[" the quality of being hot or warm","the process of making or growing goods to be sold","to say or write what someone or something is like",
"twelve o'clock in the middle of the night","a place where people who are ill or injured","the ability to form valuable opinions and make good decisions",
"to say numbers one after the other in order","written abbreviation lb a unit for measuring weight","a person who buys goods or a service","impossible to see"]
var wordbank= ["heat","production","describe","midnight","hospital","judgment","count","pound","customer","invisible"];
var ran = Math.floor(Math.random() * wordbank.length)
var generator = wordbank[ran];
var hintphrase = hints[ran];

var ar = generator.split("");
console.log(generator);


function start(){
    $(function() {
        $("#holder").hide();
        $("#box").mousedown(function() {
            $("#holder").show({complete:function() {$("#in").focus();}});
        });
    });
showunderscores(ar);
game();

}

function showunderscores (ar){
    var underscore=[];
    for (let index = 0; index < ar.length; index++) {
    underscore[index]="_";
    var Text1 = document.getElementById("word-displayed");
    Text1.textContent = underscore.join(" ");}
    return underscore;
}


function game(){
var guessedArray =[""];
var underscore = showunderscores(ar);
var j = 0;
var show = "";

document.onkeyup = function(event) {
console.log(intentos);
console.log(event.key);
guessedArray[j]=event.key;
j++;


document.getElementById("Letters-guessed").innerHTML=guessedArray;

for (let index = 0; index < ar.length; index++) {
    if (event.key==ar[index]) {
        underscore[index]=event.key;
        show =underscore.join(" ");
        var Text1 = document.getElementById("word-displayed");
        Text1.textContent = show;
        flag=false;
        }
    } 
    if (flag==false)
    {
        flag=true;
    }
    else{
        intentos=intentos-1;}
        imgchange(intentos);

  
        var x=underscore.join("");
        var y=ar.join("");

        if (intentos==0)
{ alert("you Loose!");
location.reload();}
else if (x==y)
{
alert("you win!");
location.reload();}


document.getElementById("Remaining").innerHTML=intentos;

}
document.getElementById("hint").innerHTML=hintphrase;

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
