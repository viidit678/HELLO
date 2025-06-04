const uid = "abc123456";

var fullName ="viidit thakuri";
var age =21;
var country = "Nepal";
var state = "kaski";
var email ="viditthkauri944@gmail.com";
var password ="123456";
var confirmPassword = "123456";
var isLoggedINfromGoogle = false;
var isLoggedINfromFacebook = false;
var isLoggedINfromEmail =true;
var isLoggedINfromLinkedIn = false;
var isLoggedINfromTwitter = false;
var isLoggedINfromGithub =false;
var courseName ="javascript";
var courseCount = 0;
var comparePassword =password === confirmPassword;
// fullname = prompt("enter your full  name");
console.log(fullName);
console.log(uid);
//console.log("fullName:",fullName)
// console.log(age);
// console.log(email);
// console.log(password);
// console.log(confirmPassword);
// console.log(country);
// console.log(state);
//interpolation//
console.log(`
    with Unique ID: ${uid}
    user is : ${fullName}
    and his age is:${21}
    and country is :${country}
    and state is :${state}
    his email is :${email}
    and password is :${password}
   and confirm password is :&{confirmPassword}

    `);
    console.log("This is file 02");

  
