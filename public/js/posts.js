$(".post-category-dropdown-option").on("click", function () {
    const selection = $(this).html().split("</i>")[1];
    $("#post-category-dropdown-button").html(`<i class="material-icons right">arrow_drop_down</i>${selection}`);
});

$("#new-post-button").on("click", function (e) {
    e.preventDefault();
    const title = $("#post-title-input").val().trim();
    const body = $("#post-body-input").val().trim();
    const category = $("#post-category-dropdown-button").html().split("</i>")[1];
    console.log(`Post title: ${title}`);
    console.log(`Post body: ${body}`);
    console.log(`Post category: ${category}`);
    const newPost = {
        title,
        body,
        category,
    }
    $.post("/api/posts/new", newPost, function(data) {
        console.log(data);
    }).then( function(res) {
        window.location.assign("/posts")
    });
});

$(".favorite-button").on("click", function () {
    const favState = $(this).find("i").text();
    const favId = $(this).data("id");
    let favsArray;
    if (localStorage.getItem("favPosts")) {
        favsArray = JSON.parse(localStorage.getItem("favPosts"));
    } else {
        favsArray = [];
    }
    if (favState === "favorite_border") {
        favsArray.push(favId);
        $(this).find("i").text("favorite");
        $(this).addClass("orange-text text-darken-4");
    } else {
        favsArray.splice(favsArray.indexOf(favId), 1);
        $(this).find("i").text("favorite_border");
        $(this).removeClass("orange-text text-darken-4");
    }
    localStorage.setItem("favPosts", JSON.stringify(favsArray));
});

// $(".edit-button").on("click", function() {
//     let editId = $(this).data("id");
//     console.log(editId);
//     $.get(`/posts/edit/${editId}`, function(data) {
//         console.log(data);
//     });
// })

$(() => {
    let favsArray;
    if (localStorage.getItem("favPosts")) {
        favsArray = JSON.parse(localStorage.getItem("favPosts"));
    } else {
        favsArray = [];
    } 
    $(".favorite-button").each(function() {
        const favId = $(this).data("id")
        if (favsArray.indexOf(favId) === -1) {
            $(this).find("i").text("favorite_border");
        } else {
            $(this).find("i").text("favorite");
            $(this).addClass("orange-text text-darken-4");
        }
    })
});