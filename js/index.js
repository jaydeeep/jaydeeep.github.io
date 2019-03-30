
    function images()
    {
      let imgs=['images/random/bhumbro.jpg','images/random/naiyo_jaana.jpg','images/random/nepal_flag.jpg','images/random/naiyo-jaana.jpg']
      let a=Math.floor((Math.random()*imgs.length-1)+1);
      document.write("<img src="+imgs[a]+">");
      }
