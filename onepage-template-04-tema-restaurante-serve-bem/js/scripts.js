$(function () {

    //CONTROLE DO MENU MOBILE
    $('.mobile_action').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.main_header_nav').animate({'left': '0px'}, 500);
        } else {
            $(this).removeClass('active');
            $('.main_header_nav').animate({'left': '-100%'}, 500);
        }
    });

    //HEADER
    $(window).scroll(function () {
          
          if($(this).scrollTop() > 0){
              
              if (!$('.main_header').hasClass('fixed')){
                   $('.main_header').stop().addClass('fixed');
              }
          
          }else{
          
              $('.main_header').removeClass('fixed');
          
          }
    });

    //Scroll Ancora
    var $doc = $('html, body');
     $('.scrollSuave').click(function() {
        $doc.animate({
            scrollTop:$($.attr(this,'href')).offset().top -100
        }, 500);        
        return false;
    });
    //Scroll Ancora
    
    //Menu Ativo
    $(function(){

        var links  = $("#top a");

        $(window).scroll(function(){
            var topScroll = $(window).scrollTop();
            links.each(function(){
               var href       = $(this).attr('href');
               var el         = $(href);
               var posSection = el.offset().top -101 ;
               var hSection   = el.height();

                if(posSection <= topScroll && (posSection + hSection) > topScroll){
                    links.removeClass('menuAtivo')
                    $(this).addClass('menuAtivo');
                }else{
                    $(this).removeClass("menuAtivo");
                }
            });
        });

    });
    //Menu Ativo

    //Magnific Popup
    $('.galeria').magnificPopup({ 
      type: 'image',
      delegate: 'a',
      
      gallery:{enabled:true},
      callbacks: {
        
        buildControls: function() {
         
          this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
        }
        
      }
    });

});


/*Perguntas Frequentes*/
$(document).ready(function () {
    
    $('#toggle-item li').click(function () {

        var text = $(this).find('p');

        if (text.is(':hidden')) {
            text.slideDown('220');
            $(this).find('span').html('<i class="icon icon-minus-square"></i>');        
        } else {
            text.slideUp('220');
            $(this).find('span').html('<i class="icon icon-plus-square"></i>');     
        }
        
    });

});