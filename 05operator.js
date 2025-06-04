// allow user to access course if he is :
// logged in email
//logged in facebook
//logged in google
var email =true;
var facebook =false;
var google = true;
 
if (email|| faceboook || google){
    console.log("login successful");

}
else {
    console.log("login isnot successful");
}

// allow user to access course if he is :
if (email && facebook && google){
    console.log("you cab access the course");
}
else { 
    console.log("you cannnot access the course");
}
//  //OR FROM HERE
//  // ALLOW USER TO ACCESS COURSE IF HE IS:
var email =true;
var facebook =true;
var google = true;
 if(email){
    console.log("login successful");

 }
 if(facebook){
    console.log("login successful");
 }
 if(google){
    console.log("login successful");
 }
 else {
    console.log("login is not successful");
 }
 //logical operator
 // and some of its code
 let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Access denied");
}
// now it is example of logical operators on