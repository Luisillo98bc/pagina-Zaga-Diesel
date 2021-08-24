$(function(){
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if(valor =='todos'){
            $('.cont-work').show('1000');
        }else{
            $('.cont-work').not('.'+valor).hide('1000');
            $('.cont-work').filter('.'+valor).show('1000');
        }

    });

    let equipo = $('#equipo').offset().top,
        servicio = $('#servicio').offset().top,
        ventarepuestos = $('#ventarepuestos').offset().top,
        contactenos = $('#contactenos').offset().top;

    window.addEventListener('resize', function(){
        let equipo = $('#equipo').offset().top,
        servicio = $('#servicio').offset().top,
        ventarepuestos = $('#ventarepuestos').offset().top,
        contactenos = $('#contactenos').offset().top;
    });

    

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0 -100
        },600);
    });

    $('#enlace-ventarepuestos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ventarepuestos -50
        },600);
    });

    $('#enlace-servicios').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio -50
        },600);
    });

    //falta poner el enlace//
    $('#enlace-nosotros').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
                               
        },600);
    });
    
    $('#enlace-contactenos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contactenos -100
        },600);
    });

});