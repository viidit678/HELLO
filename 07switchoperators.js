//create an application with the following caseds:
//admin - get all full access
// subadmin -get access to create/delete courses
// testprep -get access to create/delete tests
//user - get access to consume content
let user ="admin";
switch (user) {
    case "admin":
        console.log ("get all full access ");
        break;
     case "subadmin":
        console.log ("get access to create/delete courses");
        break;
     case "testprep":
        console.log ("get access to create/delete tests ");
        break;

 case "user":
        console.log ("get access to consume content ");
        break;

    default:
        console.log("you are a trial user only");
        break;
}