	let imgs=['images/random/bhumbro.jpg','images/random/naiyo_jaana.jpg','images/random/naiyo-jaana.jpg'
                ,'images/random/concert.jpg','images/random/travel1.jpg','images/random/travel2.jpg','images/random/tu_hi_tha.jpg','images/random/tu_mil_gaya.jpg'];
      let a=Math.floor((Math.random()*imgs.length-1)+1);
     function images()
    {
      document.write("<img src="+imgs[a]+">");
    }



function width()
{
		x= (document.body.clientWidth-129)+"px" ;
		document.getElementById("youtube").style.left=x;
}