$(".nav-button").on("click", function() {
    $(".header-nav").fadeToggle();
})


$(".slider").slider({
    min: 0,
    max: 100,
    range: "min",
    value: 20,
    step: 5,
    animate: "slow",
    slide: function( event, ui ) {
        $( "#amount" ).val( ui.value + "%");
      }
})

$(".slider-v").slider({
    orientation: "vertical",
    min: 0,
    max: 100,
    range: "min",
    value: 20,
    step: 5,
    animate: "fast",
    slide: function( event, ui ) {
        $( "#amount" ).val( ui.value + "%");
      }
})

$("#amount").val($( ".slider" ).slider( "value")+"%");
$("#amount2").val($( ".slide-v" ).slider( "value")+"%");