const userEmails = [];

if(userEmails) {
    console.log("User email is present");
}
else {
    console.log("Email not found");
}

// Falsy values => 7 values
// false, 0, -0, "", null, undefined, NaN

// Truthy values 
// "0", "false", " ", [], {}, function() {}

if(userEmails.length === 0) {
    console.log("User email is not present");
}