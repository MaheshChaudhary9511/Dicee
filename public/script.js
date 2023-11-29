var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randomDiceImage1="dice"+randomNumber1+".png";
var randomImageSource1="assests/images/"+randomDiceImage1;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);



var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="assests/images/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);



if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Mahesh❤️win!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Ayushi🥰win!";
}
else{
    document.querySelector("h1").innerHTML="Dono Ke🤷‍♂️🤷‍♂️Dono Pagl";
}