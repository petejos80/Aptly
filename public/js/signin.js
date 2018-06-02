$("#sign-in-button").on("click", function (e) {
    e.preventDefault();
    const user = $("#username-input").val().trim();
    const pass = $("#password-input").val().trim();
    console.log(`User is ${user}`);
    console.log(`Password is ${pass}`);
    // PASSPORT CHECK
});
