"use strict";

document.addEventListener("DOMContentLoaded", init);

let text;
let showtext;
let container = document.querySelector(".typewritten");
let i = 1;

function init() {
  console.log("init");

  //get text
  text = container.textContent;

  //remove text
  container.innerHTML = "";

  writetext();
}

function writetext() {
  console.log("writetext");

  //loop - show n'th letter, time, increment, more letters?
  showtext = text.substring(0, i);
  container.textContent = showtext;
  if (i < text.length) {
    i++;
    setTimeout(writetext, 300);
  }
}
