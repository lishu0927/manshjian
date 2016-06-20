/**
 * Created by lenovo on 2016/5/10.
 */
$('#myCarousel').carousel({
    interval:2000,
});

$("#boom2").change(function(){
    if($("#boom2").val()=='boom3'){
        $("#boom").css("visibility","visible");
    } else{
        $("#boom").css("visibility","hidden");
    }

});

$('#re-top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);return false;});
$('#re-down').click(function(){$('html,body').animate({scrollTop: $('#dibu').offset().top},1000);return false;});

