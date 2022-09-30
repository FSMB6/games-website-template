/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navmenu() {
  var x = document.getElementById("navmenu");
  if (x.className === "el--2") {
    x.className += " responsive";
  } else {
    x.className = "el--2";
  }
} 

// str platform
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
  PCE.className = PC;
  ConsoleE.className = consoleH;
  MobileE.className = mobileH;
} 

function consoole() {
  PCE.className = PCH;
  ConsoleE.className = console;
  MobileE.className = mobileH;
} 

function smartphone() {
  PCE.className = PCH;
  ConsoleE.className = consoleH;
  MobileE.className = mobile;
} 
// end platform