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

// carusel

$(function(){

    var projCarusel = $(".owl-carousel").owlCarousel({
        items : 1,
        loop : true,
        dotsEach : true
    });

    $('.portf_arrow_left_svg').on('click', function(e){
        e.preventDefault();
        projCarusel.trigger('prev.owl.carousel', [300]);
    });
    $('.portf_arrow_right_svg').on('click', function(e){
        e.preventDefault();
        projCarusel.trigger('next.owl.carousel', [300]);
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

var blur = (function () {
    var wrapper = document.querySelector('.contact-with-me');
    var form = document.querySelector('.blur__form');

    return {
        set: function () {
            var imgWidth = document.querySelector(".blur__background").offsetWidth;
            var postLeft = -wrapper.offsetLeft;
            var posTop = -wrapper.offsetTop + 800;
            var blurCSS = form.style ;

                blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
                blurCSS.backgroundPosition = postLeft + 'px'+ ' ' + posTop + 'px';

            }
        }
    }());

blur.set();

 window.onscroll = function(){
     var wScroll = window.pageYOffset;

     paralax.init(wScroll);
 };

 window.onresize = function() {
     blur.set();
 };

// overlay nav

$(function() {
    $('.burger').on('click', function(){
        $('.overlay').addClass('overlay__trygger');
    });

$('.overlay__closebtn').on('click', function(e){
    e.preventDefault();
    $('.overlay').removeClass('overlay__trygger');
});



    });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlYXRpbmdfcGljdHVyZScpLmNsYXNzTGlzdC5hZGQoJ20tLXNob3cnKTtcbiAgfSwgMTAwMCk7XG59KSgpO1xuXG4vLyBmbGlwIHNpZ24gaW4gZm9ybVxuXG4kKCcuc2lnbi1pbi1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmwtcGFnZS1hdXRvcml6YXRpb24nKS50b2dnbGVDbGFzcygnZmxpcHBlZCcpO1xufSk7XG4kKCcud2VsY29tZS1mb3JtX2J1dHRvbi1tYWluLXBhZ2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmwtcGFnZS1hdXRvcml6YXRpb24nKS50b2dnbGVDbGFzcygnZmxpcHBlZCcpO1xufSk7XG5cbi8vIGNhcnVzZWxcblxuJChmdW5jdGlvbigpe1xuXG4gICAgdmFyIHByb2pDYXJ1c2VsID0gJChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBpdGVtcyA6IDEsXG4gICAgICAgIGxvb3AgOiB0cnVlLFxuICAgICAgICBkb3RzRWFjaCA6IHRydWVcbiAgICB9KTtcblxuICAgICQoJy5wb3J0Zl9hcnJvd19sZWZ0X3N2ZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb2pDYXJ1c2VsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJywgWzMwMF0pO1xuICAgIH0pO1xuICAgICQoJy5wb3J0Zl9hcnJvd19yaWdodF9zdmcnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9qQ2FydXNlbC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcsIFszMDBdKTtcbiAgICB9KTtcbn0pO1xuXG4vLyBwYXJhbGF4XG52YXIgcGFyYWxheCA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX2JnJyk7XG4gICAgdmFyIHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJfX3BpYy1jb250YWluZXJcIik7XG4gICAgdmFyIHNlY3Rpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dC10ZXh0LXN2Z1wiKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1vdmU6IGZ1bmN0aW9uIChibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQpIHtcbiAgICAgICAgICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50ICsgXCIlXCI7XG4gICAgICAgICAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJ3RyYW5zbGF0ZTNkKDAsICcgKyBzdHJhZmUgKyAnLCAwKSc7XG5cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGJsb2NrLnN0eWxlO1xuXG4gICAgICAgICAgICBzdHlsZS50cmFuc29ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgICAgIHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKGJnLCB3U2Nyb2xsLCA0NSk7XG4gICAgICAgICAgICB0aGlzLm1vdmUodXNlciwgd1Njcm9sbCwgOCk7XG4gICAgICAgICAgICB0aGlzLm1vdmUoc2VjdGlvblRleHQsIHdTY3JvbGwsIDIwKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKSk7XG5cblxuLy8gYmx1clxuXG52YXIgYmx1ciA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC13aXRoLW1lJyk7XG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cl9fZm9ybScpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW1nV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsdXJfX2JhY2tncm91bmRcIikub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB2YXIgcG9zdExlZnQgPSAtd3JhcHBlci5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgdmFyIHBvc1RvcCA9IC13cmFwcGVyLm9mZnNldFRvcCArIDgwMDtcbiAgICAgICAgICAgIHZhciBibHVyQ1NTID0gZm9ybS5zdHlsZSA7XG5cbiAgICAgICAgICAgICAgICBibHVyQ1NTLmJhY2tncm91bmRTaXplID0gaW1nV2lkdGggKyAncHgnICsgJyAnICsgJ2F1dG8nO1xuICAgICAgICAgICAgICAgIGJsdXJDU1MuYmFja2dyb3VuZFBvc2l0aW9uID0gcG9zdExlZnQgKyAncHgnKyAnICcgKyBwb3NUb3AgKyAncHgnO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KCkpO1xuXG5ibHVyLnNldCgpO1xuXG4gd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKXtcbiAgICAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICAgcGFyYWxheC5pbml0KHdTY3JvbGwpO1xuIH07XG5cbiB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgYmx1ci5zZXQoKTtcbiB9O1xuXG4vLyBvdmVybGF5IG5hdlxuXG4kKGZ1bmN0aW9uKCkge1xuICAgICQoJy5idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAkKCcub3ZlcmxheScpLmFkZENsYXNzKCdvdmVybGF5X190cnlnZ2VyJyk7XG4gICAgfSk7XG5cbiQoJy5vdmVybGF5X19jbG9zZWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcub3ZlcmxheScpLnJlbW92ZUNsYXNzKCdvdmVybGF5X190cnlnZ2VyJyk7XG59KTtcblxuXG5cbiAgICB9KTtcbiJdfQ==
