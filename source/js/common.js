$(".nav-button").on("click", function() {
    $(".header-nav").fadeToggle();
})


$(".slider").slider({
    min: 0,
    max: 100,
    range: "min",
    value: 20,
    step: 5,
    animate: "slow"
})

$(".slider-v").slider({
    orientation: "vertical",
    min: 0,
    max: 100,
    range: "max",
    value: 20,
    step: 5,
    animate: "fast"
})