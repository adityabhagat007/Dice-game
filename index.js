var a=document.querySelector(".img1");
var b=document.querySelector(".img2");
var c=Math.random();
c=c*6;
c=Math.floor(c);
c=c+1;
console.log(c);
    if(c==1)
    {
        a=document.querySelector(".img1").src="images/dice1.png";
        b=document.querySelector(".img2").src="images/dice5.png";
    }
    else if( c==2)
    {
        a=document.querySelector(".img1").src="images/dice6.png";
        b=document.querySelector(".img2").src="images/dice3.png";
    }
    else if( c==3)
    {
        a=document.querySelector(".img1").src="images/dice4.png";
        b=document.querySelector(".img2").src="images/dice2.png";
    }
    else if(c==4)
    {
        a=document.querySelector(".img1").src="images/dice1.png";
        b=document.querySelector(".img2").src="images/dice2.png";
    }
    else if(c==5)
    {
        a=document.querySelector(".img1").src="images/dice5.png";
        b=document.querySelector(".img2").src="images/dice4.png";
    }
    else if(c==6)
    {
        a=document.querySelector(".img1").src="images/dice1.png";
        b=document.querySelector(".img2").src="images/dice6.png";
    }
