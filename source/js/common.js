$(".ui-slider").slider({
    min: 0,
    max: 100,
    range: "min",
    value: 10
})
$(".nav-button").on("click", function() {
	$(".header-nav").fadeToggle();
})