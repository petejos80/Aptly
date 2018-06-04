$(document).ready(function () {
    console.log("here");
    $(".modal").modal();
    $(".dropdown-trigger").dropdown({
        coverTrigger: false,
    });
    $(".carousel.carousel-slider").carousel({
        fullWidth: true
    });
    $('.tooltipped').tooltip();
});