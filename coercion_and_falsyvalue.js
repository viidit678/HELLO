//TODO:FALSY VALUES
// COERCION & FALSY VALUES
//UNDEFIND
//NULL
//0
//''
//NaN 
//var user; //undefined
var user = null; //it will not print anything
if (user){
    console.log("condition is true");
}
var user = 0;
if (user){
    console.log("conditionn= is true");

}
var user =""; //it is also a falsy value
if (user){
    console.log("condition is true ");

} 
var user =NaN;
if (user){
    console.log("condition is truue");
}
var user ="hello";// it is a truthy value
if (user){
    console.log("condition is true");

}
var user ="10"; 
if (user){
    console.log("condition is true ");

}
var user ="10";//it is a truthy value
if (user){    
    console.log("10"-10);

} 
//var user ="";
//if (user){    
    console.log("0"+0);//10 is a string so it will concatenate and give 00

//} 
var user ="1"; //it is  trythy value
if (1==user){    
    console.log("condition is true");//10 is a string so it will concatenate and give 00

} //it is coercion
var user = "1";
if (1===user){    
    console.log("condition is true");//10 is a string so it will concatenate and give 00

} 