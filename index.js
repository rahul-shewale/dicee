
var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;  // 1 - 6

var randomImage = "dice" + randomNumber1 + ".png";   // dice1.png - dice6.png

var randomImagesource = "images/" + randomImage ;  // /images.dice1.png  - images.dice6.png

//document.querySelectorAll("img")[0].setAttribute("src" , randomImagesource);
  
$(".img1").attr("src",randomImagesource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

var randomImagesource2 = "images/dice" + randomNumber2 + ".png";

//document.querySelectorAll("img")[1].setAttribute("src" , randomImagesource2);

$(".img2").attr("src",randomImagesource2);

// if player 1 Wins

if (randomNumber1 > randomNumber2){
  //document.querySelector("h1").style.fontSize = "6rem"
  $("h1").css("fontSize","6rem")
  
  //document.querySelector("h1").innerHTML="Player 1 Win"
  $("h1").text("Player 1 Win")
}
else if(randomNumber1 < randomNumber2){
  //document.querySelector("h1").style.fontSize = "6rem";
  $("h1").css("fontSize","6rem")
  
  document.querySelector("h1").innerHTML="Player 2 Win"
  $("h1").tetx("Player 2 Win")
}
else{
  //document.querySelector("h1").style.fontSize = "6rem"
  $("h1").css("fontSize","6rem");

  //document.querySelector("h1").innerHTML="Its Draw !"
  $("h1").text("Its Draw !")
}
