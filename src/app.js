import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  function excusa() {

    let time = 0; // contador

    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = [
      'before the class',
      'when I was sleeping',
      'while I was exercising',
      'during my lunch',
      'while I was praying'
    ];

    let wo = Math.floor(Math.random() * who.length);
    let an = Math.floor(Math.random() * action.length);
    let wt = Math.floor(Math.random() * what.length);
    let wn = Math.floor(Math.random() * when.length);


    let word = `${who[wo]} ${action[an]} ${what[wt]} ${when[wn]}`;
    document.getElementById("excusa").innerHTML = word;

 
    document.getElementById("who").innerHTML = who[wo];
    document.getElementById("action").innerHTML = action[an];
    document.getElementById("what").innerHTML = what[wt];
    document.getElementById("when").innerHTML = when[wn];

    time++;
  
  }

   setInterval(excusa, 3000);
  excusa();
};
