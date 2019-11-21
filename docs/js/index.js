$(function () {
    setTimeout(function () {
        $('.start p').fadeIn(2500);
    }, 900); //0.5秒後にロゴをフェードイン!
    setTimeout(function () {
        $('.start').fadeOut(1500);
    }, 4000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

$(function () {
    // $('.article-header-container').ripples({
    //     resolution: 400
    // });
    $('.header')
        .on('mouseover', function () {
            $('.header').stop(true).css({
                color: 'black',
            });
        })
        .on('mouseout', function () {
            $('.header').stop(true).css('color', 'beige');
        })
        .on('mouseover', function () {
            $('.header p').stop(true).animate({
                fontSize: '80px'
            },
                1500
            );
        })
        .on('mouseout', function () {
            $('.header p').stop(true).animate({
                fontSize: '45px'
            },
                1500
            );
        })
});

$(function () {

    var duration = 300;

    $('.circle-border')
        .on('mouseover', function () {
            $(this).stop(true).animate({
                borderWidth: '12px'

            },
                duration, 'easeOutSine');
        })
        .on('mouseout', function () {
            $(this).stop(true).animate({
                borderWidth: '0px',
                color: 'black'
            },
                duration, 'easeOutSine');
        })
});

$(function () {

    var duration = 300;

    $('.nav li>a')
        .on('mouseover', function () {
            $(this).css({
                color: 'red'
            });
        })
        .on('mouseout', function () {
            $(this).css({
                color: 'white'
            });
        })
});

//navの高さ変更するjquery
// $(function () {

//     var duration = 400;

//     $('nav li>a')
//         .on('mouseover', function () {
//             // $(this).stop(true).animate({
//             //     height: '120px',
//             //     color: 'red'
//             // },
//             //     duration
//             // );
//             $(this).stop(true).animate({
//                 fontSize: '40px'
//             },
//                 duration
//             );
//             // $(this).stop(true).animate({
//             //     fontSize: '25px'
//             // },
//             //     duration
//             // );
//         })
//         .on('mouseout', function () {
//             $(this).stop(true).animate({
//                 height: '25px'
//             },
//                 duration
//             );
//         });
// });



//fadein用のfunction
$(function () {
    $(window).scroll(function () {
        $('.fadein1').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                $(this).addClass('scrollin');
            }
        });
    });
});

//pagetopのやつ
$(document).ready(function () {

    var pagetop = $('.pagetop');

    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {

            pagetop.fadeIn();

        } else {

            pagetop.fadeOut();

        }

    });

    pagetop.click(function () {

        $('body, html').animate({ scrollTop: 0 }, 500);

        return false;
    });

});

$(document).ready(function () {

    var pagetop = $('.footer-content');

    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {

            pagetop.fadeIn();

        } else {

            pagetop.fadeOut();

        }

    });

    pagetop.click(function () {

        $('body, html').animate({ scrollTop: 0 }, 500);

        return false;
    });

});

