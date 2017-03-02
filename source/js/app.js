(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);
})();

// flip sign in form

$('.sign-in-button').on('click', function () {
    $('.l-page-autorization').toggleClass('flipped');
});
$('.welcome-form_button-main-page').on('click', function () {
    $('.l-page-autorization').toggleClass('flipped');
});


$(function(){

    var burgerCarusel = $(".owl-carousel").owlCarousel({
        items : 1,
        loop : true,
        dotsEach : true
    });

    $('.portf_arrow_left_svg').on('click', function(e){
        e.preventDefault();
        burgerCarusel.trigger('prev.owl.carousel', [300]);
    });
    $('.portf_arrow_right_svg').on('click', function(e){
        e.preventDefault();
        burgerCarusel.trigger('next.owl.carousel', [300]);
    });
});

// paralax
var paralax = (function () {
    var bg = document.querySelector('.hero__bg');
    var user = document.querySelector(".user__pic-container");
    var sectionText = document.querySelector(".about-text-svg");

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + "%";
            var transformString = 'translate3d(0, ' + strafe + ', 0)';

            var style = block.style;

            style.transorm = transformString;
            style.webkitTransform = transformString;
        },

        init: function (wScroll) {
            this.move(bg, wScroll, 45);
            this.move(user, wScroll, 8);
            this.move(sectionText, wScroll, 20);
        }
    }
}());


// blur

var blur = function () {
    var wrapper = document.querySelector('.contact-with-me');
    var form = document.querySelector('.blur__form');

    return {
        set: function () {
            var imgWidth = document.querySelector(".blur__background").offsetWidth;
            var postLeft = -wrapper.offsetLeft + 273;
            var posTop = -wrapper.offsetTop + 588;
            var blurCSS = form.style;

            blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
            blurCSS.backgroundPositionX = postLeft + 'px';
            blurCSS.backgroundPositionY = posTop + 'px';
        }
}
}();

blur.set();

 window.onscroll = function(){
     var wScroll = window.pageYOffset;

     paralax.init(wScroll);
 };

 window.onresize = function() {
     blur.set();
 }

// overlay nav

$(function() {
    $('.burger').on('click', function(){
        $('.overlay').addClass('overlay__trygger');
    });

$('.overlay__closebtn').on('click', function(e){
    e.preventDefault();
    $('.overlay').removeClass('overlay__trygger');
});



    })();

