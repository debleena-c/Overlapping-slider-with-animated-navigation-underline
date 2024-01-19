window.onscroll=function(){
    navFix();
  }
  var navbar = document.getElementById('nav_top');
  function navFix(){
    if (window.pageYOffset > 200){
      navbar.classList.add('fixed')
    }
    else{
      navbar.classList.remove('fixed')
    }
  };

  document.querySelector(".menu_bar").onclick = function(){
    showMenu()
  };
  function showMenu(){
    document.querySelector(".menu_bar").classList.toggle("menuclose");
    document.querySelector(".navbar_area").classList.toggle("showmenu");
    document.querySelector("body").classList.toggle("overflowhide");
  };


  






