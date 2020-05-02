jQuery('document').ready(function($){
    /* codigo menu responsive celular*/
    var menuBtn = $('.menu-cel'),
         menu = $('.contenedor1 ul');
    
    menuBtn.click(function(){
    
        if(menu.hasClass('mostrar')){
            menu.removeClass ('mostrar');
        }
        else {
            menu.addClass ('mostrar'); 
        }
    
    });
    });
    /* codigo saber en que parte de la pag se esta*/
    $(document).ready(function () {
        $(".fijo").click(function () {
        $(".fijo").removeClass("show");
        $(this).addClass("show");
        });
        });
 