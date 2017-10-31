$(document).ready(function(){

    /* For sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px'
    });

    /* Landing page Buttons */
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-features').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });


});

    //
    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //   notify(this.element.id + ' hit 25% from top of window')
    // }, {
    //   offset: '25%'
    // })
