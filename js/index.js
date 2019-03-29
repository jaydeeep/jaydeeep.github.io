
    function images()
    {
      let a=Math.floor((Math.random()*3)+1);
      document.write(a);
      if (a==1) {
        document.write('<img src=images/random/bhumbro.jpg>');
      }
      else if(a==2)
        document.write("<img src=images/random/naiyo_jaana.jpg>");
      else
        document.write("<img src=images/random/nepal_flag.jpg>");
      }