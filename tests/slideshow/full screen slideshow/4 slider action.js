//  start slider part
let sliders =  document.getElementsByClassName("slider");
let mainSlider= sliders[0];

let btn = document.getElementsByClassName("radio-img1");
// alert(btn.length);

let checked=0;
function checker() {
  // iterates every radio-img to check which one is checked
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

var counter=0; //this interrupted only by user click or counter

setInterval(function(){
      if(counter >= btn.length || counter < 0){
        counter = 0;
      }
    // }
    btn[ counter ].checked=true;
    counter++;

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