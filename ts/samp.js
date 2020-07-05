jQuery.noConflict();
jQuery(function($) {
    $('.slider').on('init',function(){
        $('sl1_content').addclass('on');
    });
    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.slider').on('beforeChange',function(){
        $('sl1_content').removeClass('on');
    });
    $('.slider').on('afterChange',function(){
        $('sl1_content').addClass('on');
    });
})