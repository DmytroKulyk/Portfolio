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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlYXRpbmdfcGljdHVyZScpLmNsYXNzTGlzdC5hZGQoJ20tLXNob3cnKTtcbiAgfSwgMTAwMCk7XG59KSgpO1xuXG4vLyBmbGlwIHNpZ24gaW4gZm9ybVxuXG4kKCcuc2lnbi1pbi1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmwtcGFnZS1hdXRvcml6YXRpb24nKS50b2dnbGVDbGFzcygnZmxpcHBlZCcpO1xufSk7XG4kKCcud2VsY29tZS1mb3JtX2J1dHRvbi1tYWluLXBhZ2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmwtcGFnZS1hdXRvcml6YXRpb24nKS50b2dnbGVDbGFzcygnZmxpcHBlZCcpO1xufSk7XG5cblxuJChmdW5jdGlvbigpe1xuXG4gICAgdmFyIGJ1cmdlckNhcnVzZWwgPSAkKFwiLm93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIGl0ZW1zIDogMSxcbiAgICAgICAgbG9vcCA6IHRydWUsXG4gICAgICAgIGRvdHNFYWNoIDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgJCgnLnBvcnRmX2Fycm93X2xlZnRfc3ZnJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnVyZ2VyQ2FydXNlbC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcsIFszMDBdKTtcbiAgICB9KTtcbiAgICAkKCcucG9ydGZfYXJyb3dfcmlnaHRfc3ZnJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnVyZ2VyQ2FydXNlbC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcsIFszMDBdKTtcbiAgICB9KTtcbn0pO1xuXG4vLyBwYXJhbGF4XG52YXIgcGFyYWxheCA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX2JnJyk7XG4gICAgdmFyIHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJfX3BpYy1jb250YWluZXJcIik7XG4gICAgdmFyIHNlY3Rpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dC10ZXh0LXN2Z1wiKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1vdmU6IGZ1bmN0aW9uIChibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQpIHtcbiAgICAgICAgICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50ICsgXCIlXCI7XG4gICAgICAgICAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJ3RyYW5zbGF0ZTNkKDAsICcgKyBzdHJhZmUgKyAnLCAwKSc7XG5cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGJsb2NrLnN0eWxlO1xuXG4gICAgICAgICAgICBzdHlsZS50cmFuc29ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgICAgIHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKGJnLCB3U2Nyb2xsLCA0NSk7XG4gICAgICAgICAgICB0aGlzLm1vdmUodXNlciwgd1Njcm9sbCwgOCk7XG4gICAgICAgICAgICB0aGlzLm1vdmUoc2VjdGlvblRleHQsIHdTY3JvbGwsIDIwKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKSk7XG5cblxuLy8gYmx1clxuXG52YXIgYmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXdpdGgtbWUnKTtcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyX19mb3JtJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbWdXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmx1cl9fYmFja2dyb3VuZFwiKS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHZhciBwb3N0TGVmdCA9IC13cmFwcGVyLm9mZnNldExlZnQgKyAyNzM7XG4gICAgICAgICAgICB2YXIgcG9zVG9wID0gLXdyYXBwZXIub2Zmc2V0VG9wICsgNTg4O1xuICAgICAgICAgICAgdmFyIGJsdXJDU1MgPSBmb3JtLnN0eWxlO1xuXG4gICAgICAgICAgICBibHVyQ1NTLmJhY2tncm91bmRTaXplID0gaW1nV2lkdGggKyAncHgnICsgJyAnICsgJ2F1dG8nO1xuICAgICAgICAgICAgYmx1ckNTUy5iYWNrZ3JvdW5kUG9zaXRpb25YID0gcG9zdExlZnQgKyAncHgnO1xuICAgICAgICAgICAgYmx1ckNTUy5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gcG9zVG9wICsgJ3B4JztcbiAgICAgICAgfVxufVxufSgpO1xuXG5ibHVyLnNldCgpO1xuXG4gd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKXtcbiAgICAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICAgcGFyYWxheC5pbml0KHdTY3JvbGwpO1xuIH07XG5cbiB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgYmx1ci5zZXQoKTtcbiB9XG5cbi8vIG92ZXJsYXkgbmF2XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgJCgnLmJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5vdmVybGF5JykuYWRkQ2xhc3MoJ292ZXJsYXlfX3RyeWdnZXInKTtcbiAgICB9KTtcblxuJCgnLm92ZXJsYXlfX2Nsb3NlYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5vdmVybGF5JykucmVtb3ZlQ2xhc3MoJ292ZXJsYXlfX3RyeWdnZXInKTtcbn0pO1xuXG5cblxuICAgIH0pKCk7XG5cbiJdfQ==
