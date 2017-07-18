//открытие меню
$(".nav-button").on("click", function() {
    $(".header-nav").fadeToggle();
});
$(".header-nav a").on("click", function(e) {
    if ($(window).width() <= 768) {
        $(".header-nav").hide();
    }
})


//фиксированный навбар + добавление активной ссылки
$(window).scroll(function() {
    if ($(this).scrollTop() > $("header").height()) {
        $("header nav").addClass("navbar-fixed")
    } else {
        $("header nav").removeClass("navbar-fixed")
    };
    var windscroll = $(window).scrollTop();
    $('.scroll-block').each(function(i) {
        if ($(this).position().top <= windscroll - 50) {
            $('.header-nav a.active-link').removeClass('active-link');
            $('.header-nav a').eq(i).addClass('active-link');
        }
    });
});


//плавная прокрутка + добавление активной ссылки
$(".header-nav a").on("click", function(e) {
    e.preventDefault();
    var id = $(this).attr("data-scroll");
    var top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
    $(".header-nav a").removeClass("active-link");
    $(this).addClass("active-link");
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


$(".info-form-input input").focus(function() {
    $(this).siblings("span").addClass("span-top");
}).blur(function() {
    $(this).siblings("span").removeClass("span-top");
})

// $(".info-form-input input").each(function() {
//     var value = $(this).val();
//     if (value != "") {
//         $(this).siblings("span").addClass("span-top")
//         console.log("пустой")
//     } else {
//         $(this).siblings("span").removeClass("span-top")
//     }
// })
$(".info-form-input input").change().each(function() {

    var value = $(this).val();
    if (value != "") {
        $(this).siblings("span").addClass("span-top")
    } else {
        $(this).siblings("span").removeClass("span-top")
    }
})