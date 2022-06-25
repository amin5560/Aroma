// Burger
$('.burger').on('click', function (event) {
    $('.nav-bar').slideToggle('200');
    $('.toggle-open').toggleClass('open');
    $('.toggle-close').toggleClass('close');
})