// jquery code

//Jquery syntax goes like =>     $(selector).action()


$(document).ready(function(){
    
    
    $(window).scroll(function(){

        
        if(this.scrollY > 20 ){
            
        
            $('.navbar').addClass("sticky");
            
            
        }
            else{
                $('.navbar').removeClass('sticky');
            }

            
        if(this.scrollY > 500){

            $('.scroll-up-btn').addClass("show");
            
        }else{
                $('.scroll-up-btn').removeClass("show");
            }
        
    
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });



    // Toggle menu/NavBar script

    $('.menu-btn').click(function(){

        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing Animation script

    var typed = new Typed(".typing", {
        strings: ["Developer","Blogger","Cyber Security Analyst", "Data Analyst", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl-carousel script

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoPlayTimeOut: 2000,
        autoPlayTimePause:true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },

            600:{
                items: 2,
                nav: false
            },

            1000:{
                items: 3,
                nav: false
            }
        }
    });

});
//------------------------------------------------------------
// there are mainly 3 types of seectors in Jquery
// 1. Element selector
// 2. Class Selector
// 3. Id selector
// -----------------------------------------------------------

