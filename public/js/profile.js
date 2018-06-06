$("#profile-submit").on("click", function (e) {
    e.preventDefault();
    
    const password = $("#password").val().trim();
    const firstname = $("#firstname").val().trim();
    const lastname = $("#lastname").val().trim();
    const unitnumber = $("#unitnumber").val().trim();
    const leasestart = $("#leasestart").val().trim();
    const leaseend = $("#leaseend").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phone").val().trim();

    const userData = {
        password,
        firstname,
        lastname,
        unitnumber,
        leasestart,
        leaseend,
        email,
        phone
    }

    $.ajax({
        method: "PUT",
        url: `/api/users`,
        data: userData,
    }).then( function(res) {
        window.location.href = "/users";
    });
});