var modal = document.getElementById("myModal");
var newBar = document.querySelector("#newbar");

function newBar1(){

    document.getElementById("newbar").innerHTML=""
    document.getElementById("newbar2").style.color="black";
    document.getElementById("newbar2").style.borderBottom="transparent"
    document.getElementById("newbar3").style.color="black";
    document.getElementById("newbar3").style.borderBottom="transparent"
    document.getElementById("newbar4").style.color="black";
    document.getElementById("newbar4").style.borderBottom="transparent"
    document.getElementById("newbar5").style.color="black";
    document.getElementById("newbar5").style.borderBottom="transparent"
    document.getElementById("newbar6").style.color="black";
    document.getElementById("newbar6").style.borderBottom="transparent"

    var a = 0;
   if(a==0){
    document.getElementById("newbar1").style.color="#ff147b";
    document.getElementById("newbar1").style.borderBottom="2px solid #ff147b"

// //  /* --------------------------------------------------------Women------------------------------------------------------ */
// -------------------------------------------------------------Whats new--------------------------------------------------------
    var btn1 = document.createElement("button");
    btn1.textContent="Makeup";
    btn1.onmouseover = function() {
        modal.style.display = "block";
    }
        window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
 }

//  /* --------------------------------------------------------Women------------------------------------------------------ */
//  /* -----------------------------------------------------Indian Wear---------------------------------------------------- */

    var btn2 = document.createElement("button");
    btn2.textContent="skin care";

    var indianWear=document.getElementById("indianWear");
    btn2.onclick=function(){
        count=1;
        indianWear.style.display="block";
    }

    //  /* --------------------------------------------------------Women------------------------------------------------------ */
    // -------------------------------------------------------- western Wear----------------------------------------------------
    var btn3 = document.createElement("button");
    btn3.textContent="hair care";

            //  /* --------------------------------------------------------Women------------------------------------------------------ */
    // -------------------------------------------------------- Bags----------------------------------------------------
    var btn4 = document.createElement("button");
    btn4.textContent="Personal care";

            //  /* --------------------------------------------------------Women------------------------------------------------------ */
    // -------------------------------------------------------- Footwear----------------------------------------------------
    var btn5 = document.createElement("button");
    btn5.textContent="Men";


            //  /* --------------------------------------------------------Women------------------------------------------------------ */
    // -------------------------------------------------------- Jewllery----------------------------------------------------
    var btn6 = document.createElement("button");
    btn6.textContent="fragrance";


            //  /* --------------------------------------------------------Women------------------------------------------------------ */
    // -------------------------------------------------------- Lingerie----------------------------------------------------
    var btn7 = document.createElement("button");
    btn7.textContent="Lingerie";

            //  /* --------------------------------------------------------Women------------------------------------------------------ */
    // -------------------------------------------------------- SportWear----------------------------------------------------
    var btn8 = document.createElement("button");
    btn8.textContent="Health & Wellness";


            //  /* --------------------------------------------------------Women------------------------------------------------------ */
    // -------------------------------------------------------- Sleep Lounge----------------------------------------------------
    var btn9 = document.createElement("button");
    btn9.textContent="Mom & Baby";


            //  /* --------------------------------------------------------Women------------------------------------------------------ */
    // --------------------------------------------------------Watches----------------------------------------------------

    newBar.append(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, );
    a = 1;
}
var menmodal = document.getElementById("menModal");
function newBar2(){
    document.getElementById("newbar").innerHTML=""
    document.getElementById("newbar1").style.color="black";
    document.getElementById("newbar1").style.borderBottom="transparent"
    document.getElementById("newbar3").style.color="black";
    document.getElementById("newbar3").style.borderBottom="transparent"
    document.getElementById("newbar4").style.color="black";
    document.getElementById("newbar4").style.borderBottom="transparent"
    document.getElementById("newbar5").style.color="black";
    document.getElementById("newbar5").style.borderBottom="transparent"
    document.getElementById("newbar6").style.color="black";
    document.getElementById("newbar6").style.borderBottom="transparent"
    a = 1;
    if (a==1){
    document.getElementById("newbar2").style.color="#FD7685";
    document.getElementById("newbar2").style.borderBottom="2px solid #FD7685"

 
 
   
    document.getElementById("newbar2").addEventListener("click",function(){
        menmodal.style.display = "block";
    })




    newBar.append(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10);
    a=2;
    }
    
}
var kidmodal = document.getElementById("kidModal");
function newBar3(){

    document.getElementById("newbar").innerHTML=""
    document.getElementById("newbar1").style.color="black";
    document.getElementById("newbar1").style.borderBottom="transparent"
    document.getElementById("newbar2").style.color="black";
    document.getElementById("newbar2").style.borderBottom="transparent"
    document.getElementById("newbar4").style.color="black";
    document.getElementById("newbar4").style.borderBottom="transparent"
    document.getElementById("newbar5").style.color="black";
    document.getElementById("newbar5").style.borderBottom="transparent"
    document.getElementById("newbar6").style.color="black";
    document.getElementById("newbar6").style.borderBottom="transparent"

    a=2;
    document.getElementById("newbar3").style.color="#FD7685";
    document.getElementById("newbar3").style.borderBottom="2px solid #FD7685"

   newBar.append(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10);

    a=3;
}
var homemodal = document.getElementById("homeModal");
function newBar4(){

    document.getElementById("newbar").innerHTML=""
    document.getElementById("newbar1").style.color="black";
    document.getElementById("newbar1").style.borderBottom="transparent"
    document.getElementById("newbar2").style.color="black";
    document.getElementById("newbar2").style.borderBottom="transparent"
    document.getElementById("newbar3").style.color="black";
    document.getElementById("newbar3").style.borderBottom="transparent"
    document.getElementById("newbar5").style.color="black";
    document.getElementById("newbar5").style.borderBottom="transparent"
    document.getElementById("newbar6").style.color="black";
    document.getElementById("newbar6").style.borderBottom="transparent"

    a=3;
    document.getElementById("newbar4").style.color="#FD7685";
    document.getElementById("newbar4").style.borderBottom="2px solid #FD7685"

   newBar.append(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8);
    a=4;
}
var techmodal = document.getElementById("techModal");
function newBar5(){

    document.getElementById("newbar").innerHTML=""
    document.getElementById("newbar1").style.color="black";
    document.getElementById("newbar1").style.borderBottom="transparent"
    document.getElementById("newbar2").style.color="black";
    document.getElementById("newbar2").style.borderBottom="transparent"
    document.getElementById("newbar3").style.color="black";
    document.getElementById("newbar3").style.borderBottom="transparent"
    document.getElementById("newbar4").style.color="black";
    document.getElementById("newbar4").style.borderBottom="transparent"
    document.getElementById("newbar6").style.color="black";
    document.getElementById("newbar6").style.borderBottom="transparent"

    a=4;
    document.getElementById("newbar5").style.color="#FD7685";
    document.getElementById("newbar5").style.borderBottom="2px solid #FD7685"


a=5;
}

function newBar6(){
    
    document.getElementById("newbar").innerHTML=""
    document.getElementById("newbar1").style.color="black";
    document.getElementById("newbar1").style.borderBottom="transparent"
    document.getElementById("newbar2").style.color="black";
    document.getElementById("newbar2").style.borderBottom="transparent"
    document.getElementById("newbar3").style.color="black";
    document.getElementById("newbar3").style.borderBottom="transparent"
    document.getElementById("newbar4").style.color="black";
    document.getElementById("newbar4").style.borderBottom="transparent"
    document.getElementById("newbar5").style.color="black";
    document.getElementById("newbar5").style.borderBottom="transparent"


    a=5;
    if(a=5){
        document.getElementById("newbar6").style.color="#FD7685";
    document.getElementById("newbar6").style.borderBottom="2px solid #FD7685"
    var more = document.getElementById("newbar6");

    var myMore = document.getElementById("myMore");
    more.onclick=function(){
        myMore.style.display="block";
    }
    window.onclick = function(event) {
    if (event.target == myMore) {
        myMore.style.display = "none";
    }
    }
a=6;
    }
}


//   ======================================================================================sign======================================================================
var Usar = JSON.parse(localStorage.getItem("User"));
document.getElementById("userValue").textContent= Usar;
var signStatus = JSON.parse(localStorage.getItem("signIn"));
if(signStatus=="signedUp"){
function acFunction(){
var account=document.getElementById("acountSign");
account.style.display="block";

window.onclick = function(event) {
if (event.target == account) {
account.style.display = "none";
}
}
}
} else{
function acFunction(){
var account=document.getElementById("Account");
acount.style.display="block";

console.log(signStatus);

window.onclick = function(event) {
if (event.target == acount) {
acount.style.display = "none";
}
}
}
}

// ================================================================================logout====================================================================================
function logOut(){
   localStorage.removeItem("User");
   localStorage.removeItem("signIn");
   window.location.href="index.html";
}

// ===================================================================================Wish List=========================================================================
if(signStatus=="signedUp"){
    function wishFun(){
        window.location.href="wish.html"
    }
}else{
    function wishFun(){
    var span = document.getElementById("crossed");
   var signupOrLogin= document.getElementById("loginOrSignup");
   signupOrLogin.style.display="block";
   window.onclick=function(event){
       if(event.target == signupOrLogin){
           signupOrLogin.style.display="none";
           document.getElementById("acount").style.display="none";
       }
   }
   span.onclick=function(){
       signupOrLogin.style.display="none";
       document.getElementById("acount").style.display="none";
   }

}
}
// ====================================================================================empty cart=================================================================
document.querySelector("#loginS").addEventListener("click",function(){
    window.location.href="login.html"

})
//  -----------------------------------------------------------------------------------open signup page
function openSign(){
var logUp= document.getElementById("logUp");
logUp.style.display="block";

window.onclick=function(event){
   if(event.target==logUp){
       logUp.style.display="none";
   }
}
var span = document.getElementById("back")
span.onclick =function(){
logUp.style.display="none";
}
document.getElementById("gbsignIn").onclick=function(){
    logUp.style.display="none"; 
}

}


// function gotohome(){
//     window.location.href="index.html"
// }


// personDetails
var da=JSON.parse(localStorage.getItem("personDetails"));
console.log("da:",da);


function gotohome(da){

let email=document.getElementById("ADname").value;
let password=document.getElementById("CardNumber").value;

if(email=="sayligiri555@gmail.com" && password==1234567890){

alert("Login Succesfull ....., Welcome to purple");

window.location.href="index.html"

}
else{
alert("Email and Password incurrect ..,please try again")
}

}




function BTLogin(){
window.location.href="login.html"
}
function primerShow(){
window.location.href="primer.html"
}

function signupsubmit(){
window.location.href="index.html"

}
