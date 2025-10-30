$(".header_menu").click(function() {
    $(this).toggleClass("active");
    $(".header_nav").toggleClass("active");
    $(".header").toggleClass("active");
})

$(".btn-back").click(function() {
    history.back();
})