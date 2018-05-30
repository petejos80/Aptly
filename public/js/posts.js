$(".post-category-dropdown-option").on("click", function () {
    const selection = $(this).html().split("</i>")[1];
    $("#post-category-dropdown-button").html(`<i class="material-icons right">arrow_drop_down</i>${selection}`);
});

$("#post-button").on("click", function (e) {
    e.preventDefault();
    const title = $("#post-title-input").val().trim();
    const body = $("#post-body-input").val().trim();
    const category = $("#post-category-dropdown-button").html().split("</i>")[1];
    console.log(`Post title: ${title}`);
    console.log(`Post body: ${body}`);
    console.log(`Post category: ${category}`);
    // CALL POST ROUTE TO POSTS HERE
});