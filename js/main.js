$(function () {

    "use strict";

    //======MENU FIX========
    if ($('.tf_main_manu').offset() != undefined) {
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 40) {
                $('.tf_main_manu').addClass('menu_fix');
            } else {
                $('.tf_main_manu').removeClass('menu_fix');
            }
        });
    }


    //======BARFILLER JS========
    $(document).ready(function () {
        $('#bar1').barfiller();
    });


    //=======COUNTDOWN======   
    var d = new Date(),
        countUpDate = new Date();
    d.setDate(d.getDate() + 365);

    // default example
    simplyCountdown('.simply-countdown-one', {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate(),
        enableUtc: true
    });


    // ======venobox js======
    $('.venobox').venobox();





});
