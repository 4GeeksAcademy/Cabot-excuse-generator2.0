/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  const randomWho = Math.floor(Math.random() * who.length);
  //console.log(who[randomWho]);
  const randomAction = Math.floor(Math.random() * action.length);
  //console.log(action[randomAction]);
  const randomWhat = Math.floor(Math.random() * what.length);
  //console.log(what[randomWhat]);
  const randomWhen = Math.floor(Math.random() * when.length);
  //console.log(when[randomWhen]);
  const randomExcuse =
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen];
  //console.log(randomExcuse);
  const element = document.getElementById("excuses");
  element.innerHTML = randomExcuse;
};
