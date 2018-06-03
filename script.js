//Image big
function bigImg(x) {
    x.style.width = "110%";
  }

function normalImg(x) {
x.style.width = "100%";
}
  
//Scroller 
let  mainNav = $(".main-nav");
mainNavScroll = "main-nav-scrolled";
header = $('header').height();

$(window).scroll(function() {
if( $(this).scrollTop() > header ) {
    mainNav.addClass(mainNavScroll);
} else {
    mainNav.removeClass(mainNavScroll);
}
});



//Shows arrow to go to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}