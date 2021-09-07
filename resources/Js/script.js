$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features-point').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('fixed-nav');
        } else {
            $('nav').removeClass('fixed-nav');
        }
    }, {
      offset: '150px;'
    });



/* scroll asnimation */
 
    $('.js--scroll-to-AboutUs').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features-point').offset().top - 150}, 500); 
    });
   
     $('.js--section-features-services-click').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features-services').offset().top - 85},500); 
    });
       /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
   
      });

  }); 
    
    
    
 /*  asnimation */   
    
    
    
    $('.js--section-features-point').waypoint(function(direction){
        $('.js--section-features-point').addClass('animated flipInY');
    },{
        offset: '50%'
    });
    
    

    
       $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated bounceInRight');
    },{
        offset: '90%'
    });
    
    
    
    
       $('.js--section-features-1').waypoint(function(direction){
        $('.js--section-features-1').addClass('animated bounceInLeft');
    },{
        offset: '70%'
    });
    
    
       $('.js--section-features-2').waypoint(function(direction){
        $('.js--section-features-2').addClass('animated bounceInRight');
    },{
        offset: '70%'
    });
    
    
        $('.js--section-features-3').waypoint(function(direction){
        $('.js--section-features-3').addClass('animated bounceInLeft');
    },{
        offset: '70%'
    });
    
    
    
     /*  animation nav btn */   
    
        $('.js--animated-nav-btn').waypoint(function(direction){
        $('.js--animated-nav-btn').addClass('animated bounceInDown');
      },{
        offset: '1000%'
    });
    
   
     /*  animation social btn */   
    
        $('.js--social-animate').waypoint(function(direction){
        $('.js--social-animate').addClass('animated rubberBand');
    },{
        offset: '1000%'
    });
    
    /*  About Us Button  */
   
      $('.js--scroll-to-AboutUs').waypoint(function(direction){
        $('.js--scroll-to-AboutUs').addClass('animated flipInX');
    },{
        offset: '1000%'
    });
    
    /*logo */
    
  
    
      $('.js--logo').waypoint(function(direction){
        $('.js--logo').addClass('animated bounceInLeft');
    },{
        offset: '1000%'
    });
    
    
   
      $('.js--Form-animate').waypoint(function(direction){
        $('.js--Form-animate').addClass('animated lightSpeedIn');
    },{
        offset: '90%'
    });
    
 
    
      $('.js--social-links-footer').waypoint(function(direction){
        $('.js--social-links-footer').addClass('animated rotateInUpLeft');
    },{
        offset: '100%'
    });
});