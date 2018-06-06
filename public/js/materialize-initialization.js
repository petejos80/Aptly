$(document).ready(function () {
    $(".modal").modal();
    $(".dropdown-trigger").dropdown({
        coverTrigger: false,
    });
    $(".carousel.carousel-slider").carousel({
        fullWidth: true
    });
    $('.tooltipped').tooltip();
    $('.datepicker').datepicker();
    $('.datepicker').on("focus", function () {
        const elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems);
        instances.forEach((picker) => {
            if ($(this).attr("id") === picker.el.id) {
                picker.open();
            }
        })
    });
});