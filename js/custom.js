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


  const sliderIndicator = document.querySelectorAll(".slider-btn")
  const slides = document.querySelectorAll(".video-slide")

  var Slidernav = function(manual){
    sliderIndicator.forEach((btn) => {
          btn.classList.remove("active");
      });
      slides.forEach((slide) => {
          slide.classList.remove("active");
      });
      sliderIndicator[manual].classList.add("active");
      slides[manual].classList.add("active");
    
  }
  sliderIndicator.forEach((btn, i) =>{
      btn.addEventListener("click", () => {
          Slidernav(i);
      });
  });


  // menu = document.querySelector(".menu_list");
  // menu.addEventListener("mouseover", (event) => {
  //   if (event.target.classList.contains("menu_link")) {
  //     menu.style.setProperty(
  //       "--underline-width",
  //       `${event.target.offsetWidth}px`
  //     );
  //     menu.style.setProperty(
  //       "--underline-offset-x",
  //       `${event.target.offsetLeft}px`
  //     );
  //   }
  // });
  // menu.addEventListener("mouseleave", () =>
  //   menu.style.setProperty("--underline-width", "0")
  // );

// var marker = document.querySelector("#marker");
// var item = document.querySelector(".menu_list li");
// function indicator(e){
//   marker.style.left = e.offsetLeft+"px";
//   marker.style.width = e.offsetWidth+"px";
// }

// item.forEach(link => {
//   link.addEventListener("click", (e)=>{
//     indicator(e.target);
//   })
// })



