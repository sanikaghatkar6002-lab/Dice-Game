function rollDice(){

var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
console.log(randomNumber1);

var randomDiceImage="dice"+ randomNumber1 + ".png";
var randomImageScource="images/" + randomDiceImage;
document.querySelector(".img1").setAttribute("src",randomImageScource);


var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
console.log(randomNumber2);

var randomDiceImage2="dice"+ randomNumber2 + ".png";
var randomImageScource2="images/" + randomDiceImage2;
document.querySelector(".img2").setAttribute("src",randomImageScource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML="Draw";
 }
}