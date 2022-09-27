//  start slider part
let sliders =  document.getElementsByClassName("slider");
let mainSlider= sliders[0];

let btn = document.getElementsByClassName("radio-img1");
// alert(btn.length);

let checked=0;
function checker() {
  // itorates every radio-img to check which one is checked
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].checked==true) {
      checked= i;
      // alert(checked);
      return checked;
    }
    // alert(checked);
  }
}
console.log(checker());

var counter=0; //this intrupted only by user click
setInterval(function(){
    // if (checker()>= btn.length) {
      
    // }
    btn[ counter ].checked=true;
    counter++;
    if(counter > 3){
      counter = 0;
    }
  }, 1000);

// var counter=1;
  // setInterval(function(){
//   document.getElementById('radio' + counter).checked=true;
//   counter++;
//   if(counter > 4){
//     counter = 1;
//   }
// }, 5000);

//  end  slider part