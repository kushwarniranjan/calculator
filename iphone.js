// clear
function clearAll() {
  const display = document.getElementById("display");
  display.value = "";
  console.log(display);
}
// delete one by one
// function deletelast() {
//   const display = document.getElementById("display");
//   let displayLen = display.value.length;
//   display.value = display.value.substring(0, displayLen - 1);
// }
function deletelast() {
  const display = document.getElementById("display"); //1234
  let displayChars = Array.from(display.value); //[1,2,3,4]
  displayChars.pop(); //[1,2,3]
  display.value = displayChars.join("");
}

function addnumber(value) {
  const display = document.getElementById("display");
  display.value = display.value + value;
}
function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
    if (display.value === "Infinity" || display.value === "-Infinity") {
      display.value = "undefined";
    }
    // switch (display.value) {
    //   case "Infinity":
    //     display.value ='undefined'
    //     break;
    //   case "-Infinity"
    //   display.value ='undefined'
    //     break;

    //   default:
    //     break;
    // }
  } catch (error) {
    display.value = "Error";
  }
}

const dev = "developer";
let result = dev.toUpperCase();

console.log(result);

// function addRandom(ran1, ran2) {
// let ran1 = Math.random() * 50 + 1;
// let ran2 = Math.random() * 100 + 1;
// const add = ran1 + ran2;
// console.log(add);
// // }
// let ran3 = Math.random() * 50 + 1;
// let ran4 = Math.random() * 100 + 1;
// const add2 = ran3 - ran4;
// console.log(add2);

// let ran5 = Math.random() * 50 + 1;
// let ran6 = Math.random() * 100 + 1;
// const add3 = ran1 * ran2;
// console.log(add3);

// let ran7 = Math.random() * 50 + 1;
// let ran8 = Math.random() * 100 + 1;
// const add4 = ran7 / ran8;
// console.log(add4);

const ran1 = Math.floor(Math.random() * 50 + 1);
const ran2 = Math.floor(Math.random() * 100 + 1);

const sum = ran1 + ran2;
console.log(`${ran1} + ${ran2} = ${sum}`);

const subs = ran1 - ran2;
console.log(`${ran1} - ${ran2} = ${subs}`);

const multiply = ran1 * ran2;
console.log(`${ran1} * ${ran2} = ${multiply}`);

const divide = Math.round(ran1 / ran2);
console.log(`${ran1} / ${ran2} = ${divide}`);
