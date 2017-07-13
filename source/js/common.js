//открытие меню
$(".nav-button").on("click", function() {
    $(".header-nav").fadeToggle();
});
$(".header-nav a").on("click", function(e) {
    if ($(window).width() <= 768) {
        $(".header-nav").hide();
    }
})

//плавная прокрутка
$(".header-nav a").on("click", function(e) {
    e.preventDefault();
    var id = $(this).attr("data-scroll");
    var top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
})

//slider
$(".slider").slider({
    min: 0,
    max: 100,
    range: "min",
    value: 35,
    step: 5,
    animate: "slow",
    slide: function(event, ui) {
        $("#amount").val(ui.value + "%");
    }
})
$(".slider-v").slider({
    orientation: "vertical",
    min: 0,
    max: 100,
    range: "min",
    value: 35,
    step: 5,
    animate: "fast",
    slide: function(event, ui) {
        $("#amount").val(ui.value + "%");
    }
})
$("#amount").val($(".slider").slider("value") + "%");
$("#amount2").val($(".slide-v").slider("value") + "%");