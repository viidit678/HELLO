//show user a singnout button if he is authenticated
// otherwise show a login button/signup
 var authenticated = true;
if (authenticated){
    console.log("shows signout button");

   }
else{
    console.log("shows login button");

}
//using ternary operator 
authenticated ? console.log("shows singout button"):console.log("shows login button")