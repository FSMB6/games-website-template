/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navmenu() {
  var x = document.getElementById("navmenu");
  if (x.className === "el--2") {
    x.className += " responsive";
  } else {
    x.className = "el--2";
  }
} 

var PC = "grid pc";
var PCH = "grid hidden pc";

var console = "grid console";
var consoleH = "grid hidden console";

var mobile = "grid mobile";
var mobileH = "grid hidden mobile";


var PCE = document.getElementById("PC");
var ConsoleE = document.getElementById("Console");
var MobileE = document.getElementById("Mobile");
function pc() {
  // alert("pc");
  // console.log("running");
  // console.log(PCE.className);
  PCE.className = PC;

  ConsoleE.className = consoleH;
  MobileE.className = mobileH;
} 

function consoole() {
  // alert("consoole");
  PCE.className = PCH;
  // alert(PCE.className);
  
  ConsoleE.className = console;
  // alert(ConsoleE.className);
  
  MobileE.className = mobileH;
  // alert(MobileE.className);
} 

function smartphone() {
  // alert("mobile");

  PCE.className = PCH;
  ConsoleE.className = consoleH;
  MobileE.className = mobile;
} 