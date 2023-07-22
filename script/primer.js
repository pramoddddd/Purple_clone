const list=[
    "https://media6.ppl-media.com/mediafiles/ecomm/misc/1645261539_mac_web_category.jpg",
    "https://media6.ppl-media.com/mediafiles/ecomm/misc/1645688045_nybae-pouch-combo-web-category-banner-1280_400.jpg",
   "https://media6.ppl-media.com/mediafiles/ecomm/misc/1645618185_pu-web-brand-banner-1280-x-400_-2.jpg",
  "https://media6.ppl-media.com/mediafiles/ecomm/misc/1645619198_faces-brand-web-2-1.jpg",
  "https://media6.ppl-media.com/mediafiles/ecomm/misc/1641539319_pu-web-category-banner_.jpg",
  "https://media6.ppl-media.com/mediafiles/ecomm/misc/1643292255_nybae-web-brand-banner-1280_400-1.gif?tr=f-gif",
  "https://media6.ppl-media.com/mediafiles/ecomm/misc/1643971559_bh_purplle_category-banner-primer.jpg",
  "https://media6.ppl-media.com/mediafiles/ecomm/misc/1645366718_loreal-paris-makeup-cat-web.png",
  

];
let slide=document.getElementById("slideshow");
let imag=document.createElement("img");
imag.setAttribute("class","imgsize");
imag.src=list[0];
slide.append(imag);
let i=1;
setInterval(function(){
    if(list.length===i){
        i=0;
        imag.src=list[list.length-1];
    slide.append(imag);

    }
    imag.src=list[i];

    slide.append(imag);

    i++;
},3500);








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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~signup entry``~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ================================================================================================Sign in===================================================================






function BTLogin(){
window.location.href="login.html"
}
function primerShow(){
window.location.href="./primer.html"
}
function homego(){
window.location.href="index.html"

}



// .................................................loginsignup.............................................


// function openSign(){
//     let name=document.getElementById("Loginnumber").value;


// }
function OTPBTN(){
let num=Math.floor(Math.random() * 900000) + 100000;

alert(`Your Otp  ${num}`)
}


function signupsubmit(){
let sname=document.getElementById("signupname").value;
let semail=document.getElementById("signupemail").value;
let smobile=document.getElementById("signupmobile").value;
let spassword=document.getElementById("signupPass").value;

let signupData=JSON.parse(localStorage.getItem("personDetails"))||[];
let obj={
    sname,
    semail,
    smobile,
    spassword
}
signupData.push(obj);
localStorage.setItem("personDetails",JSON.stringify(signupData));

setTimeout(function(){
    window.location.href="index.html"
},2000)
}



var data = [
{
    img : "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-Best_Seller_235x235small_e0fLESWoel.png,ofo-top_right/static/img/product/268739/ny-bae-primer-gold-15g-20_1_display_1640075868_54d01593.jpg",
    name : "NY Bae Brightenin' Primer|Face Primer| For Brightening & Radiant Glow| Removes Creases| Even Skin Tone| All Skin Types| Matte|",
    price : 225

},
{
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/239648/insight-3-in-1-long-lasting-primer-30ml-67_2_display_1630212475_7b05bb98.jpg",
    name : "Insight 3 In 1 Long Lasting Primer (30ml)",
    price : 250 
    
},
{
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/250565/ny-bae-pro-primer-orange-color-correcting-face-primer-15-ml_1_display_1634907622_6adaad73.jpg",
    name : "NY Bae Pro Primer | Orange Colour Correcting Face Primer | Covers Dark Spots & Pigmentation | Matte Finish | Light weight | Quick Absorbing | Pore Filling",
    price : 249 
    
},
{
    img : "https://media6.ppl-media.com/tr:h-250,w-250,c-at_max/static/img/product/214310/lakme-absolute-blur-perfect-makeup-primer-10-g-18_7_display_1631104552_882ba13c.jpg",
    name : "Lakme Absolute Blur Perfect Makeup Primer, 10 g",
    price : 299
  
},
{
    img : "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/273286/blue-heaven-prep-and-fix-setting-mist_1_display_1642054697_bb95f090.jpg",     
    name : "Blue Heaven Prep & Fix Primer & Setting Mist (60 ml)",
    price : 350
}, 
{
    img : "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-Best_Seller_235x235small_e0fLESWoel.png,ofo-top_right/static/img/product/232332/blue-heaven-studio-perfection-primer-30-g_2_display_1612161844_9ec6a65b.jpg",  
    name : "Blue Heaven Flawless Makeup Base Primer (30 g)",
    price : 350 
    
},
{
    img : "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/206610/colorbar-cosmetics-flawless-finish-primer-30ml-ffp001_2_display_1599304855_7a10b52e.jpg",
    name : "Colorbar Cosmetics Flawless Finish Primer-30ml FFP001",
    price : 499 
  
},
{
    img : "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-Best_Seller_235x235small_e0fLESWoel.png,ofo-top_right/static/img/product/250565/ny-bae-pro-primer-orange-color-correcting-face-primer-15-ml_1_display_1634907622_6adaad73.jpg",
    name : "NY Bae Pro Primer | Orange Colour Correcting Face Primer | Covers Dark Spots & Pigmentation | Matte Finish | Light weight | Quick Absorbing | Pore Filling",
    price : 250 
    
},
{
    img : "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/270504/ny-bae-primer-white-15g_10_display_1631800105_bba75699.jpg",
    name : "NY Bae Blurin' Primer|Face Primer|Blurs Out Pores & Fine Lines| Enriched With Vitamin E| Radiant Glow| All Skin Types| Matte (15 gm)",
    price : 350
    
},
{
    img : "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/220344/purplle-true-jewel-24k-gold-primer-20-ml-52_9_display_1628078698_82961a11.jpg",
    name : "Purplle True Jewel 24K Gold Primer|Matte| Oil Control| Shine Control| Long Lasting| Lightweight| Dermatologically Tested - (20 ml)",
    price : 400
    
},
{
    img : "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-top_rated_235x235small_1kce6dd9kH.png,ofo-top_right/static/img/product/250564/ny-bae-pro-primer-yellow-color-correcting-face-primer-15-ml_2_display_1634907515_af5f4dff.jpg",
    name : "NY Bae Pro Primer | Yellow Colour Correcting Face Primer | Corrects Discolouration & Dullness | Matte Finish | Light weight | Quick Absorbing | Pore Filling",
    price : 218
    
},
{
    img : "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/238793/ny-bae-face-primer-48_10_display_1631799901_3c29c8d8.jpg",
    name : "NY Bae Makeup Primer|Face Primer|All Skin Types| Matte| Light Weight",
    price : 210
   
},
{
    img : "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/227298/maybelline-new-york-fit-me-primer-matte-poreless_8_display_1634019309_3768fc1f.jpg",
    name : "Maybelline New York Fit me Primer Matte + Poreless",
    price : 210
    
},
{
    img : "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/259349/blue-heaven-primer-and-fixer-combo-set-30gm-60ml_1_display_1633440576_ba67b1a0.jpg",
    name : "Blue Heaven Primer and Fixer Combo set, 30gm + 60ml",
    price : 330
},
{
    img : "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-top_rated_235x235small_1kce6dd9kH.png,ofo-top_right/static/img/product/237895/m-a-c-prep-prime-fix-100-ml_4_display_1581498096_1dbee4ad.jpg",
    name : "M.A.C Prep + Prime Fix + (100 ml)",
    price : 1600
}
,
{
    img : "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/197246/lakme-absolute-under-cover-gel-face-primer-30-g_1_display_1565351964_a3d491e5.jpg",
    name : "Lakme Absolute Under Cover Gel Face Primer (30 g)",
    price : 600
}
];
display(data)
var count=0;  
 function display(data){
 document.querySelector("#primerS").innerHTML="";
 
 data.map(function(ele){
 var div=document.createElement("div");

 var imagediv= document.createElement("div");
 imagediv.setAttribute("class","imgdiv")
 var imge= document.createElement("img")
 imge.setAttribute("class","isize")
 imge.setAttribute("src",ele.img);
 imagediv.append(imge);
 var pbtn=document.createElement("button");
 
 pbtn.textContent="ADD TO CART";
 var p=document.createElement("p");
 p.innerText=ele.name;
 var prdiv=document.createElement("div");
 prdiv.setAttribute("class","pridiv")
 var price=document.createElement("h2");
 price.innerText=`Rs ${ele.price}`;
 var offers=document.createElement("p");
 offers.innerText="5% off";


pbtn.addEventListener("click",addincart)

 function  addincart(){
     count++;
    pbtn.textContent="ADDED  IN  CART";
    pbtn.style.color="white";
    pbtn.style.backgroundColor="black";

    document.getElementById("cartAddnum").innerText=count;

    var prdetails=JSON.parse(localStorage.getItem("details"))||[];
    var product={
        name:ele.name,
        image:ele.img,
        price:ele.price
    }
    prdetails.push(product);
    localStorage.setItem("details",JSON.stringify(prdetails))
 }  


   prdiv.append(price,offers) 

    
div.append(imagediv,pbtn,p,prdiv)
 document.querySelector("#primerS").append(div);
});
}

document.getElementById("cone").addEventListener("click",gotocart)

function gotocart(){
 window.location.href="cart.html"
}

document.querySelector("#loginS").addEventListener("click",function(){
    window.location.href="login.html"

})

function lowtohigh(){
    data.sort(function(a,b){
        return a.price-b.price;
   
    });
    console.log(data);
    display(data)
   }
   
   function hightolow(){
    data.sort(function(a,b){
        return b.price-a.price;
   
    });
    console.log(data);
    display(data)
   }