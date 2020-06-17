jQuery.noConflict();
jQuery(function($) {
    $('slider').on('init','.slider',function(){
        $('sl1_content').addclass('on');
    });
    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
    $('slider').on('beforeChange','.slider',function(){
        $('sl1_content').removeclass('on');
    });
    $('slider').on('afterChange','.slider',function(){
        $('sl1_content').addclass('on');
    });
})