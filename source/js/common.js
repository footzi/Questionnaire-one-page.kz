//открытие меню
$(".nav-button").on("click", function() {
    $(".header-nav").fadeToggle();
});
$(".header-nav a").on("click", function(e) {
    if ($(window).width() <= 768) {
        $(".header-nav").hide();
    }
});


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
});


//работа с input

//если есть фокус, поднимаем placeholder
$(".info-form-input input").focus(function() {
    $(this).siblings("span").addClass("span-top");
});

//у всех заполненных input поднимаем placeholder
$(".info-form-input input").each(function() {
    var value = $(this).val();
    if (value != "") {
        $(this).siblings("span").addClass("span-top");
    } else {
        $(this).siblings("span").removeClass("span-top");
    }
});

//если input был пустой, то при изменении либо поднимаем либо опускаем placeholder
$(".info-form-input input").change(function() {
    var value = $(this).val();
    if (value != "") {
        $(this).siblings("span").addClass("span-top");
    } else {
        $(this).siblings("span").removeClass("span-top");
    }
});


//имитация select
$(".info-form-select input").on("click", function() {
    $(".list").fadeToggle();
});

//переворот стрелки
$(document).on("click", function() {
    var open = $(".list").is(":visible");
    if (open) {
        $(".info-form-select img").addClass("rotate-arrow");
    } else {
        $(".info-form-select img").removeClass("rotate-arrow");
    }
});

//заполнение input
$(".list p").on("click", function() {
    var value = $(this).attr("data-list");
    $(".info-form-select input").val(value);
    $(".list").hide();
});

//закрытие выпадающего при клике на свободную область списка
$(document).click(function(event) {
    if ($(event.target).closest(".info-form-select").length) return;
    $(".list").hide();
    $(".info-form-select img").removeClass("rotate-arrow");
    event.stopPropagation();
});

//прокрутка
$(".list").niceScroll({
    cursorcolor: "#d9d9d9",
    cursorwidth: "5",
    cursorfixedheight: "120",
    scrollspeed: "10"
});


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
});
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
});
$("#amount").val($(".slider").slider("value") + "%");
$("#amount2").val($(".slide-v").slider("value") + "%");