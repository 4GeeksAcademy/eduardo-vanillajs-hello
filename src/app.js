/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  pronoun.forEach(articulo => {
    adj.forEach(adj => {
      noun.forEach(suj => {
        console.log(articulo + adj + suj + ".com");
      });
    });
  });
  console.log("Hello Rigo from the console!");
};
