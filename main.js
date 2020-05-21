$(window).scroll(function(){
    var scroll = $(window).scrollTop(),
    dh = $(document).height(),
    ww = $(window).width(),
    value = (scroll / (dh-ww)) *100;
    $('#container').css('left', - value * (dh/ww) + '%');
})
