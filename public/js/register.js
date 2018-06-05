function getUserInfo() {
    const firstname = $("#firstname-input").val();
    const lastname = $("#lastname-input").val();
    const email = $("#email-input").html();
    const leaseEnd = $("#leaseend-input").html();
    const leaseStart = $("#leasestart-input").html();
    const password = $("#password-input").html();
    const unitnumber = $("#unitnumber-input").html();
    const phone = $("#phone-input").html();
    const newUser = {
        firstname,
        lastname,
        email,
        leaseEnd,
        leaseStart,
        password,
        unitnumber,
        phone
    }
    return newUser;
}

$("#update-user-button").on("click", function (e) {
    e.preventDefault();
    const updateUserData = getUserInfo();
    const userId = $(this).data("id");
    $.ajax({
        method: "PUT",
        url: `/api/users/${userId}`,
        data: updateUserData,
    }).then( function(res) {
        window.location.href = "/profile";
    });
})