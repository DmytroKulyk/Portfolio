// (function() {
//   'use strict';
//
//   setTimeout(function() {
//     document.querySelector('.greating_picture').classList.add('m--show');
//   }, 1000);
// })();

//preload

var preloader = (function() {
   var preloader = $('.preloader');
   var procentsTotal = 0;

   var imgPath = $('*').map(function (ndx, element) {
       var background = $(element).css('background-image');
       var isimg = $(element).is('img');
       var path = '';

       if(background != 'none'){
           path = background.replace('url("', '').replace('")', '');
       }

       if(isimg) {
           path = $(element).attr('src');
       }

      if (path) return path;
   });

   var setPercents = function(total, current) {
       var percents = Math.ceil(current / total * 100);
       $(".forest_num").text(percents + '%');

        if(percents >= 100){
            preloader.fadeOut();
        }

   };

   var loadImages = function(images) {
       if (!images.length) preloader.fadeOut();

       images.forEach(function (img, i, image) {

           var fakeImages = $('<img>', {
                attr: {
                    src: img
                }
           });

           fakeImages.on('load error', function () {
               procentsTotal++;
               setPercents(images.length, procentsTotal);

           })

       })
   };

   return {
       init: function () {
            var img = imgPath.toArray();

            loadImages(img);
       }
   }
}());

$(function(){
    preloader.init();
});



// flip sign in form

$('.sign-in-button').on('click', function () {
    $('.l-page-autorization').toggleClass('flipped');
});
$('.welcome-form_button-main-page').on('click', function () {
    $('.l-page-autorization').toggleClass('flipped');
});

// form autorization

$('.welcome-form_button-sign-in').on('click', function () {
    var loginVal = $('.login-input').val();
    var loginPass = $('.password-input').val();
    var dropErrorLg = $('.dropdown_error-login-text');
    var dropErrorPw = $('.dropdown_error-pass-text');
    var radioInp = $('input[name=question]:checked').val();
    console.log(radioInp);

    if(loginVal == "" || loginVal == null){
        dropErrorLg.text('Enter login');

        $('.dropdown_error-login').css({
            'display' : 'block'
        });
        $('.login-input').css({
            'border' : '1px solid #e34844'
        }).focus();
        $('.login_svg').css({
            'fill' : '#e34844'
        });
        return false;
    }
    if(loginPass == "" || loginPass == null){
        dropErrorPw.text('Enter password');

        $('.dropdown_error-password').css({
            'display' : 'block'
        });
        $('.password-input').css({
            'border' : '1px solid #e34844'
        }).focus();
        $('.password_svg').css({
            'fill' : '#e34844'
        });
        return false;
    }
    if($('.back-window__form-input_checkbox').is(':checked') == false){

        $('.back-window__form-label-checkbox').css({
            'color' : '#e34844',
            'font-weight': 'bold'
        });
        return false;
    }

    if(radioInp == undefined){

        $('.back-window__form-question').css({
            'color' : '#e34844',
            'font-weight': 'bold'
        });
        return false;
    }else if(radioInp == 'no'){
        $('.back-window__form-question').css({
            'color' : '#e34844',
            'font-weight': 'bold'
        });
        return false;
    }
    return true;
});



$('.login-input').on('input', function(){
    $('.dropdown_error-login').css({
        'display' : 'none'
    });
    $('.login_svg').css({
        'fill': '#6e9c5b'
    });
    $('.login-input').css({
        'border' : '1px solid #6e9c5b'
    });
});
$('.password-input').on('input', function(){
    $('.dropdown_error-password').css({
        'display' : 'none'
    });
    $('.password_svg').css({
        'fill': '#6e9c5b'
    });
    $('.password-input').css({
        'border' : '1px solid #6e9c5b'
    });
});

// form autorization project

function formValidFunc(inputVar, message, className){
    inputVar.before("<div class="+ className+">Please enter your "+message+"</div>");
    inputVar.focus();
    inputVar.on('input', function(){
        $('.'+className).remove();
    });
}

$('.contact-me__form-button-send').on('click', function(){

    var inputName = $('.form_name-input');
    var inputMale = $('.form_email-input');
    var inputTextarea = $('.contact-me__form-input_textarea');
    var email_valid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(inputName.val() == ""){
        formValidFunc(inputName, 'name', 'error_message-name');

        return false;
    }
    if(!email_valid.test(inputMale.val())){
        formValidFunc(inputMale, 'correct email', 'error_message-mail');
        return false;
    }

    if(inputTextarea.val() == ""){
        formValidFunc(inputTextarea, 'message', 'error_message-textarea');
        return false
    }
    return true

});

$('input[type=text], textarea[type=textarea]').on('focus', function(){
    $(this).css({
        'border' : '1px solid #6e9c5b'
    })
})
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

// svg animation on scroll


// $(function(){
//     $(window).scroll(function(){
//         var aTop = $('.about__col_right').height();
//         if($(this).scrollTop() >=  aTop){
//             alert('header just passed.');
//
//         }
//     });
// });
// $(document).scroll(function() {
//     console.log($(document).scrollTop());
// });



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChmdW5jdGlvbigpIHtcbi8vICAgJ3VzZSBzdHJpY3QnO1xuLy9cbi8vICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlYXRpbmdfcGljdHVyZScpLmNsYXNzTGlzdC5hZGQoJ20tLXNob3cnKTtcbi8vICAgfSwgMTAwMCk7XG4vLyB9KSgpO1xuXG4vL3ByZWxvYWRcblxudmFyIHByZWxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgIHZhciBwcmVsb2FkZXIgPSAkKCcucHJlbG9hZGVyJyk7XG4gICB2YXIgcHJvY2VudHNUb3RhbCA9IDA7XG5cbiAgIHZhciBpbWdQYXRoID0gJCgnKicpLm1hcChmdW5jdGlvbiAobmR4LCBlbGVtZW50KSB7XG4gICAgICAgdmFyIGJhY2tncm91bmQgPSAkKGVsZW1lbnQpLmNzcygnYmFja2dyb3VuZC1pbWFnZScpO1xuICAgICAgIHZhciBpc2ltZyA9ICQoZWxlbWVudCkuaXMoJ2ltZycpO1xuICAgICAgIHZhciBwYXRoID0gJyc7XG5cbiAgICAgICBpZihiYWNrZ3JvdW5kICE9ICdub25lJyl7XG4gICAgICAgICAgIHBhdGggPSBiYWNrZ3JvdW5kLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCdcIiknLCAnJyk7XG4gICAgICAgfVxuXG4gICAgICAgaWYoaXNpbWcpIHtcbiAgICAgICAgICAgcGF0aCA9ICQoZWxlbWVudCkuYXR0cignc3JjJyk7XG4gICAgICAgfVxuXG4gICAgICBpZiAocGF0aCkgcmV0dXJuIHBhdGg7XG4gICB9KTtcblxuICAgdmFyIHNldFBlcmNlbnRzID0gZnVuY3Rpb24odG90YWwsIGN1cnJlbnQpIHtcbiAgICAgICB2YXIgcGVyY2VudHMgPSBNYXRoLmNlaWwoY3VycmVudCAvIHRvdGFsICogMTAwKTtcbiAgICAgICAkKFwiLmZvcmVzdF9udW1cIikudGV4dChwZXJjZW50cyArICclJyk7XG5cbiAgICAgICAgaWYocGVyY2VudHMgPj0gMTAwKXtcbiAgICAgICAgICAgIHByZWxvYWRlci5mYWRlT3V0KCk7XG4gICAgICAgIH1cblxuICAgfTtcblxuICAgdmFyIGxvYWRJbWFnZXMgPSBmdW5jdGlvbihpbWFnZXMpIHtcbiAgICAgICBpZiAoIWltYWdlcy5sZW5ndGgpIHByZWxvYWRlci5mYWRlT3V0KCk7XG5cbiAgICAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1nLCBpLCBpbWFnZSkge1xuXG4gICAgICAgICAgIHZhciBmYWtlSW1hZ2VzID0gJCgnPGltZz4nLCB7XG4gICAgICAgICAgICAgICAgYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IGltZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgZmFrZUltYWdlcy5vbignbG9hZCBlcnJvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgIHByb2NlbnRzVG90YWwrKztcbiAgICAgICAgICAgICAgIHNldFBlcmNlbnRzKGltYWdlcy5sZW5ndGgsIHByb2NlbnRzVG90YWwpO1xuXG4gICAgICAgICAgIH0pXG5cbiAgICAgICB9KVxuICAgfTtcblxuICAgcmV0dXJuIHtcbiAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW1nID0gaW1nUGF0aC50b0FycmF5KCk7XG5cbiAgICAgICAgICAgIGxvYWRJbWFnZXMoaW1nKTtcbiAgICAgICB9XG4gICB9XG59KCkpO1xuXG4kKGZ1bmN0aW9uKCl7XG4gICAgcHJlbG9hZGVyLmluaXQoKTtcbn0pO1xuXG5cblxuLy8gZmxpcCBzaWduIGluIGZvcm1cblxuJCgnLnNpZ24taW4tYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoJy5sLXBhZ2UtYXV0b3JpemF0aW9uJykudG9nZ2xlQ2xhc3MoJ2ZsaXBwZWQnKTtcbn0pO1xuJCgnLndlbGNvbWUtZm9ybV9idXR0b24tbWFpbi1wYWdlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoJy5sLXBhZ2UtYXV0b3JpemF0aW9uJykudG9nZ2xlQ2xhc3MoJ2ZsaXBwZWQnKTtcbn0pO1xuXG4vLyBmb3JtIGF1dG9yaXphdGlvblxuXG4kKCcud2VsY29tZS1mb3JtX2J1dHRvbi1zaWduLWluJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBsb2dpblZhbCA9ICQoJy5sb2dpbi1pbnB1dCcpLnZhbCgpO1xuICAgIHZhciBsb2dpblBhc3MgPSAkKCcucGFzc3dvcmQtaW5wdXQnKS52YWwoKTtcbiAgICB2YXIgZHJvcEVycm9yTGcgPSAkKCcuZHJvcGRvd25fZXJyb3ItbG9naW4tdGV4dCcpO1xuICAgIHZhciBkcm9wRXJyb3JQdyA9ICQoJy5kcm9wZG93bl9lcnJvci1wYXNzLXRleHQnKTtcbiAgICB2YXIgcmFkaW9JbnAgPSAkKCdpbnB1dFtuYW1lPXF1ZXN0aW9uXTpjaGVja2VkJykudmFsKCk7XG4gICAgY29uc29sZS5sb2cocmFkaW9JbnApO1xuXG4gICAgaWYobG9naW5WYWwgPT0gXCJcIiB8fCBsb2dpblZhbCA9PSBudWxsKXtcbiAgICAgICAgZHJvcEVycm9yTGcudGV4dCgnRW50ZXIgbG9naW4nKTtcblxuICAgICAgICAkKCcuZHJvcGRvd25fZXJyb3ItbG9naW4nKS5jc3Moe1xuICAgICAgICAgICAgJ2Rpc3BsYXknIDogJ2Jsb2NrJ1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnLmxvZ2luLWlucHV0JykuY3NzKHtcbiAgICAgICAgICAgICdib3JkZXInIDogJzFweCBzb2xpZCAjZTM0ODQ0J1xuICAgICAgICB9KS5mb2N1cygpO1xuICAgICAgICAkKCcubG9naW5fc3ZnJykuY3NzKHtcbiAgICAgICAgICAgICdmaWxsJyA6ICcjZTM0ODQ0J1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZihsb2dpblBhc3MgPT0gXCJcIiB8fCBsb2dpblBhc3MgPT0gbnVsbCl7XG4gICAgICAgIGRyb3BFcnJvclB3LnRleHQoJ0VudGVyIHBhc3N3b3JkJyk7XG5cbiAgICAgICAgJCgnLmRyb3Bkb3duX2Vycm9yLXBhc3N3b3JkJykuY3NzKHtcbiAgICAgICAgICAgICdkaXNwbGF5JyA6ICdibG9jaydcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5wYXNzd29yZC1pbnB1dCcpLmNzcyh7XG4gICAgICAgICAgICAnYm9yZGVyJyA6ICcxcHggc29saWQgI2UzNDg0NCdcbiAgICAgICAgfSkuZm9jdXMoKTtcbiAgICAgICAgJCgnLnBhc3N3b3JkX3N2ZycpLmNzcyh7XG4gICAgICAgICAgICAnZmlsbCcgOiAnI2UzNDg0NCdcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYoJCgnLmJhY2std2luZG93X19mb3JtLWlucHV0X2NoZWNrYm94JykuaXMoJzpjaGVja2VkJykgPT0gZmFsc2Upe1xuXG4gICAgICAgICQoJy5iYWNrLXdpbmRvd19fZm9ybS1sYWJlbC1jaGVja2JveCcpLmNzcyh7XG4gICAgICAgICAgICAnY29sb3InIDogJyNlMzQ4NDQnLFxuICAgICAgICAgICAgJ2ZvbnQtd2VpZ2h0JzogJ2JvbGQnXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYocmFkaW9JbnAgPT0gdW5kZWZpbmVkKXtcblxuICAgICAgICAkKCcuYmFjay13aW5kb3dfX2Zvcm0tcXVlc3Rpb24nKS5jc3Moe1xuICAgICAgICAgICAgJ2NvbG9yJyA6ICcjZTM0ODQ0JyxcbiAgICAgICAgICAgICdmb250LXdlaWdodCc6ICdib2xkJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1lbHNlIGlmKHJhZGlvSW5wID09ICdubycpe1xuICAgICAgICAkKCcuYmFjay13aW5kb3dfX2Zvcm0tcXVlc3Rpb24nKS5jc3Moe1xuICAgICAgICAgICAgJ2NvbG9yJyA6ICcjZTM0ODQ0JyxcbiAgICAgICAgICAgICdmb250LXdlaWdodCc6ICdib2xkJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG5cblxuJCgnLmxvZ2luLWlucHV0Jykub24oJ2lucHV0JywgZnVuY3Rpb24oKXtcbiAgICAkKCcuZHJvcGRvd25fZXJyb3ItbG9naW4nKS5jc3Moe1xuICAgICAgICAnZGlzcGxheScgOiAnbm9uZSdcbiAgICB9KTtcbiAgICAkKCcubG9naW5fc3ZnJykuY3NzKHtcbiAgICAgICAgJ2ZpbGwnOiAnIzZlOWM1YidcbiAgICB9KTtcbiAgICAkKCcubG9naW4taW5wdXQnKS5jc3Moe1xuICAgICAgICAnYm9yZGVyJyA6ICcxcHggc29saWQgIzZlOWM1YidcbiAgICB9KTtcbn0pO1xuJCgnLnBhc3N3b3JkLWlucHV0Jykub24oJ2lucHV0JywgZnVuY3Rpb24oKXtcbiAgICAkKCcuZHJvcGRvd25fZXJyb3ItcGFzc3dvcmQnKS5jc3Moe1xuICAgICAgICAnZGlzcGxheScgOiAnbm9uZSdcbiAgICB9KTtcbiAgICAkKCcucGFzc3dvcmRfc3ZnJykuY3NzKHtcbiAgICAgICAgJ2ZpbGwnOiAnIzZlOWM1YidcbiAgICB9KTtcbiAgICAkKCcucGFzc3dvcmQtaW5wdXQnKS5jc3Moe1xuICAgICAgICAnYm9yZGVyJyA6ICcxcHggc29saWQgIzZlOWM1YidcbiAgICB9KTtcbn0pO1xuXG4vLyBmb3JtIGF1dG9yaXphdGlvbiBwcm9qZWN0XG5cbmZ1bmN0aW9uIGZvcm1WYWxpZEZ1bmMoaW5wdXRWYXIsIG1lc3NhZ2UsIGNsYXNzTmFtZSl7XG4gICAgaW5wdXRWYXIuYmVmb3JlKFwiPGRpdiBjbGFzcz1cIisgY2xhc3NOYW1lK1wiPlBsZWFzZSBlbnRlciB5b3VyIFwiK21lc3NhZ2UrXCI8L2Rpdj5cIik7XG4gICAgaW5wdXRWYXIuZm9jdXMoKTtcbiAgICBpbnB1dFZhci5vbignaW5wdXQnLCBmdW5jdGlvbigpe1xuICAgICAgICAkKCcuJytjbGFzc05hbWUpLnJlbW92ZSgpO1xuICAgIH0pO1xufVxuXG4kKCcuY29udGFjdC1tZV9fZm9ybS1idXR0b24tc2VuZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICB2YXIgaW5wdXROYW1lID0gJCgnLmZvcm1fbmFtZS1pbnB1dCcpO1xuICAgIHZhciBpbnB1dE1hbGUgPSAkKCcuZm9ybV9lbWFpbC1pbnB1dCcpO1xuICAgIHZhciBpbnB1dFRleHRhcmVhID0gJCgnLmNvbnRhY3QtbWVfX2Zvcm0taW5wdXRfdGV4dGFyZWEnKTtcbiAgICB2YXIgZW1haWxfdmFsaWQgPSAvXlthLXpBLVowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvO1xuXG4gICAgaWYoaW5wdXROYW1lLnZhbCgpID09IFwiXCIpe1xuICAgICAgICBmb3JtVmFsaWRGdW5jKGlucHV0TmFtZSwgJ25hbWUnLCAnZXJyb3JfbWVzc2FnZS1uYW1lJyk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZighZW1haWxfdmFsaWQudGVzdChpbnB1dE1hbGUudmFsKCkpKXtcbiAgICAgICAgZm9ybVZhbGlkRnVuYyhpbnB1dE1hbGUsICdjb3JyZWN0IGVtYWlsJywgJ2Vycm9yX21lc3NhZ2UtbWFpbCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoaW5wdXRUZXh0YXJlYS52YWwoKSA9PSBcIlwiKXtcbiAgICAgICAgZm9ybVZhbGlkRnVuYyhpbnB1dFRleHRhcmVhLCAnbWVzc2FnZScsICdlcnJvcl9tZXNzYWdlLXRleHRhcmVhJyk7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuXG59KTtcblxuJCgnaW5wdXRbdHlwZT10ZXh0XSwgdGV4dGFyZWFbdHlwZT10ZXh0YXJlYV0nKS5vbignZm9jdXMnLCBmdW5jdGlvbigpe1xuICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgJ2JvcmRlcicgOiAnMXB4IHNvbGlkICM2ZTljNWInXG4gICAgfSlcbn0pXG4vLyBwYXJhbGF4XG52YXIgcGFyYWxheCA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX2JnJyk7XG4gICAgdmFyIHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJfX3BpYy1jb250YWluZXJcIik7XG4gICAgdmFyIHNlY3Rpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dC10ZXh0LXN2Z1wiKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1vdmU6IGZ1bmN0aW9uIChibG9jaywgd2luZG93U2Nyb2xsLCBzdHJhZmVBbW91bnQpIHtcbiAgICAgICAgICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtc3RyYWZlQW1vdW50ICsgXCIlXCI7XG4gICAgICAgICAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJ3RyYW5zbGF0ZTNkKDAsICcgKyBzdHJhZmUgKyAnLCAwKSc7XG5cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGJsb2NrLnN0eWxlO1xuXG4gICAgICAgICAgICBzdHlsZS50cmFuc29ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgICAgIHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0OiBmdW5jdGlvbiAod1Njcm9sbCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKGJnLCB3U2Nyb2xsLCA0NSk7XG4gICAgICAgICAgICB0aGlzLm1vdmUodXNlciwgd1Njcm9sbCwgOCk7XG4gICAgICAgICAgICB0aGlzLm1vdmUoc2VjdGlvblRleHQsIHdTY3JvbGwsIDIwKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKSk7XG5cblxuLy8gYmx1clxuXG52YXIgYmx1ciA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC13aXRoLW1lJyk7XG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cl9fZm9ybScpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW1nV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsdXJfX2JhY2tncm91bmRcIikub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB2YXIgcG9zdExlZnQgPSAtd3JhcHBlci5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgdmFyIHBvc1RvcCA9IC13cmFwcGVyLm9mZnNldFRvcCArIDgwMDtcbiAgICAgICAgICAgIHZhciBibHVyQ1NTID0gZm9ybS5zdHlsZSA7XG5cbiAgICAgICAgICAgICAgICBibHVyQ1NTLmJhY2tncm91bmRTaXplID0gaW1nV2lkdGggKyAncHgnICsgJyAnICsgJ2F1dG8nO1xuICAgICAgICAgICAgICAgIGJsdXJDU1MuYmFja2dyb3VuZFBvc2l0aW9uID0gcG9zdExlZnQgKyAncHgnKyAnICcgKyBwb3NUb3AgKyAncHgnO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KCkpO1xuXG5ibHVyLnNldCgpO1xuXG4gd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKXtcbiAgICAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cbiAgICAgcGFyYWxheC5pbml0KHdTY3JvbGwpO1xuIH07XG5cbiB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgYmx1ci5zZXQoKTtcbiB9O1xuXG4vLyBvdmVybGF5IG5hdlxuXG4kKGZ1bmN0aW9uKCkge1xuICAgICQoJy5idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAkKCcub3ZlcmxheScpLmFkZENsYXNzKCdvdmVybGF5X190cnlnZ2VyJyk7XG4gICAgfSk7XG5cbiQoJy5vdmVybGF5X19jbG9zZWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcub3ZlcmxheScpLnJlbW92ZUNsYXNzKCdvdmVybGF5X190cnlnZ2VyJyk7XG4gICAgIH0pO1xuIH0pO1xuXG4vLyBzdmcgYW5pbWF0aW9uIG9uIHNjcm9sbFxuXG5cbi8vICQoZnVuY3Rpb24oKXtcbi8vICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgIHZhciBhVG9wID0gJCgnLmFib3V0X19jb2xfcmlnaHQnKS5oZWlnaHQoKTtcbi8vICAgICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA+PSAgYVRvcCl7XG4vLyAgICAgICAgICAgICBhbGVydCgnaGVhZGVyIGp1c3QgcGFzc2VkLicpO1xuLy9cbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gfSk7XG4vLyAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4vLyAgICAgY29uc29sZS5sb2coJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkpO1xuLy8gfSk7XG5cblxuIl19
