// import readlineSync from "readline-sync";
import menu from "./menu.js";
import funky from "./intro.js"
import epil from "./epi.js"

epil();

setTimeout(() => {
  console.clear();
}, 9000); // 9000

setTimeout(() => {
  funky();
}, 9000); //9000



setTimeout(() => {
  menu();
}, 15000); // 19000


