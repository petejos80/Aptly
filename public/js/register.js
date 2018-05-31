$("#register-button").on("click", function (e) {
    e.preventDefault();
    const userName = $("#userName").val().trim();
    const password = $("#password").val().trim();
    const firstName = $("#firstName").val().trim();
    const lastName = $("#lastName").val().trim();
    const unitNumber = $("#unitNumber").val().trim();
    const leaseEnd = $("#leaseEnd").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phone").val().trim();

    console.log(`User Name is ${userName}`);
    console.log(`Password is ${password}`);
    console.log(`First Name is ${firstName}`);
    console.log(`Last Name is ${lastName}`);
    console.log(`Unit Number is ${unitNumber}`);
    console.log(`Lease End is ${leaseEnd}`);
    console.log(`Email is ${email}`);
    console.log(`Phone is ${phone}`);
    // PASSPORT CHECK
});