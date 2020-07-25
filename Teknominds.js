var bannerStatus=1;
var bannerTime=4000;

window.onload=function(){
  bannerLoop();
}

var startBannerLoop = setInterval(function(){
  bannerLoop();

}, bannerTime);

// document.getElementById("main-banner").onmouseenter=function(){
//   clearInterval(startBannerLoop);
// }

// document.getElementById("main-banner").onmouseleave= function(){
//   startBannerLoop= setInterval(function(){
//     bannerLoop();
//   }, bannerTime);
// }

document.getElementById("imgbanbtn-prev").onclick= function(){
  if(bannerStatus===1){
    bannerStatus=4;
  }
  else if(bannerStatus===2){
    bannerStatus=5;
  }
  else if(bannerStatus===3){
    bannerStatus=1;
  }
  else if(bannerStatus===4){
    bannerStatus=2;
  }
  else if(bannerStatus===5){
    bannerStatus=3;
  }
  bannerLoop();
}

document.getElementById("imgbanbtn-next").onclick= function(){
  bannerLoop();
}

function bannerLoop(){
  if(bannerStatus===1){
    document.getElementById("imgban2").style.opacity="0";
    setTimeout(function(){
      document.getElementById("imgban1").style.right="0px";
      document.getElementById("imgban1").style.zIndex="1500px";
      document.getElementById("imgban2").style.right="1900px";
      document.getElementById("imgban2").style.zIndex="2000px";
      document.getElementById("imgban3").style.right="2800px";
      document.getElementById("imgban3").style.zIndex="2500px";
      document.getElementById("imgban4").style.right="3700px";
      document.getElementById("imgban4").style.zIndex="3000px";
      document.getElementById("imgban5").style.right="1900px";
      document.getElementById("imgban5").style.zIndex="1200px";
    }, 500);
    setTimeout(function(){
      document.getElementById("imgban2").style.opacity="1";
    }, 1000);
    bannerStatus=2;
  }
  else if(bannerStatus===2){
    document.getElementById("imgban3").style.opacity="0";
    setTimeout(function(){
      document.getElementById("imgban2").style.right="0px";
      document.getElementById("imgban2").style.zIndex="1500px";
      document.getElementById("imgban3").style.right="1900px";
      document.getElementById("imgban3").style.zIndex="2000px";
      document.getElementById("imgban4").style.right="2800px";
      document.getElementById("imgban4").style.zIndex="2500px";
      document.getElementById("imgban5").style.right="3700px";
      document.getElementById("imgban5").style.zIndex="3000px";
      document.getElementById("imgban1").style.right="1900px";
      document.getElementById("imgban1").style.zIndex="1200px";
    }, 500);
    setTimeout(function(){
      document.getElementById("imgban3").style.opacity="1";
    }, 1000);
    bannerStatus=3;
  }
  else if(bannerStatus===3){
    document.getElementById("imgban4").style.opacity="0";
    setTimeout(function(){
      document.getElementById("imgban3").style.right="0px";
      document.getElementById("imgban3").style.zIndex="1500px";
      document.getElementById("imgban4").style.right="1900px";
      document.getElementById("imgban4").style.zIndex="2000px";
      document.getElementById("imgban5").style.right="2800px";
      document.getElementById("imgban5").style.zIndex="2500px";
      document.getElementById("imgban1").style.right="3700px";
      document.getElementById("imgban1").style.zIndex="3000px";
      document.getElementById("imgban2").style.right="1900px";
      document.getElementById("imgban2").style.zIndex="1200px";
    }, 500);
    setTimeout(function(){
      document.getElementById("imgban4").style.opacity="1";
    }, 1000);
    bannerStatus=4;
  }

  else if(bannerStatus===4){
    document.getElementById("imgban5").style.opacity="0";
    setTimeout(function(){
      document.getElementById("imgban4").style.right="0px";
      document.getElementById("imgban4").style.zIndex="1500px";
      document.getElementById("imgban5").style.right="1900px";
      document.getElementById("imgban5").style.zIndex="2000px";
      document.getElementById("imgban1").style.right="2800px";
      document.getElementById("imgban1").style.zIndex="2500px";
      document.getElementById("imgban2").style.right="3700px";
      document.getElementById("imgban2").style.zIndex="3000px";
      document.getElementById("imgban3").style.right="1900px";
      document.getElementById("imgban3").style.zIndex="1200px";
    }, 500);
    setTimeout(function(){
      document.getElementById("imgban5").style.opacity="1";
    }, 1000);
    bannerStatus=5;
  }

  else if(bannerStatus===5){
    document.getElementById("imgban1").style.opacity="0";
    setTimeout(function(){
      document.getElementById("imgban5").style.right="0px";
      document.getElementById("imgban5").style.zIndex="1500px";
      document.getElementById("imgban1").style.right="1900px";
      document.getElementById("imgban1").style.zIndex="2000px";
      document.getElementById("imgban2").style.right="2800px";
      document.getElementById("imgban2").style.zIndex="2500px";
      document.getElementById("imgban3").style.right="3700px";
      document.getElementById("imgban3").style.zIndex="3000px";
      document.getElementById("imgban4").style.right="1900px";
      document.getElementById("imgban4").style.zIndex="1200px";
    }, 500);
    setTimeout(function(){
      document.getElementById("imgban1").style.opacity="1";
    }, 1000);
    bannerStatus=1;
  }
}

// var slideIndex = 1;
// showSlides(slideIndex);


// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementByClassName("mySlides");
//   var dots = document.getElementByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "flex";
//   dots[slideIndex-1].className += " active";
// }
