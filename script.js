$(window).ready(function() {
    $('#book').turn({
        display: 'double',
        acceleration: false,
        gradients: !$.isTouch,
        elevation: 50,
    });
});

$(window).bind('keydown', function(e){
    if (e.keyCode==37)
        $('#book').turn('previous');
    else if (e.keyCode==39)
        $('#book').turn('next');
});
