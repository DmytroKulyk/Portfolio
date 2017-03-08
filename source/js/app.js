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


